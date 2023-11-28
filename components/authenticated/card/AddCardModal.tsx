"use client";
import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import ModalContainer from "@/components/modals/ModalContainer";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

interface TopUpModalProps {
  opened: boolean;
  onClose: () => void;
  onAddCard: () => void;
}

const AddCardModal = (props: TopUpModalProps) => {
  const { opened, onClose, onAddCard } = props;
  const [loading, setLoading] = useState(false);

  const [input, setInput] = useState({
    cardNumber: "",
    expireDate: "",
    cvc: "",
    cardholderName: "",
    country: "",
    city: "",
    address: "",
    zipCode: "",
  });

  function formatCardNumber(value: string) {
    // Remove any non-numeric characters
    const numericValue = value.replace(/\D/g, "");
    // Add space every 4 digits to format the card number
    const formattedValue = numericValue.replace(/(\d{4}(?!\s))/g, "$1 ");

    return formattedValue.trim();
  }

  function formatExpiration(value: string) {
    // Remove any non-numeric characters
    const numericValue = value.replace(/\D/g, "");
    // Add '/' after the first two digits
    const formattedValue = numericValue.replace(/^(\d{2})/, "$1/");

    return formattedValue;
  }

  const addCardHandler = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post("/api/card", input);
      if (data.error) throw new Error(data.error);
      onClose();
      onAddCard();
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ModalContainer title="Ajouter une carte" opened={opened} onClose={onClose}>
      <div className="flex flex-col gap-3">
        <div>
          <div>Numéro de carte</div>
          <TextInput
            maxLength={25}
            value={input.cardNumber}
            onChange={(e) =>
              setInput({
                ...input,
                cardNumber: formatCardNumber(e.target.value),
              })
            }
            placeholder="0000 0000 0000 0000"
          />
        </div>

        <div className="flex items-center justify-between gap-3">
          <div>
            <div>Date d'expiration</div>
            <TextInput
              maxLength={5}
              value={input.expireDate}
              onChange={(e) =>
                setInput({
                  ...input,
                  expireDate: formatExpiration(e.target.value),
                })
              }
              placeholder="MM/AA Par exemple 24/02"
            />
          </div>

          <div>
            <div>CVC</div>
            <TextInput
              maxLength={4}
              value={input.cvc}
              onChange={(e) =>
                setInput({ ...input, cvc: e.target.value.replace(/\D/g, "") })
              }
              placeholder="000"
            />
          </div>
        </div>

        <div>
          <div>Nom du titulaire</div>
          <TextInput
            value={input.cardholderName}
            onChange={(e) =>
              setInput({ ...input, cardholderName: e.target.value })
            }
            placeholder="Nom sur la carte, par exemple John Doe"
          />
        </div>

        <div className="flex items-center justify-between gap-3">
          <div>
            <div>Pays</div>
            <TextInput
              value={input.country}
              onChange={(e) => setInput({ ...input, country: e.target.value })}
              placeholder="Entrez votre pays"
            />
          </div>

          <div>
            <div>Ville/État</div>
            <TextInput
              value={input.city}
              onChange={(e) => setInput({ ...input, city: e.target.value })}
              placeholder="Par exemple New York"
            />
          </div>
        </div>

        <div>
          <div>Adresse de la rue</div>
          <TextInput
            value={input.address}
            onChange={(e) => setInput({ ...input, address: e.target.value })}
            placeholder="Par exemple, rue Minivan n ° 10"
          />
        </div>

        <div>
          <div>Code postal / Code postal</div>
          <TextInput
            value={input.zipCode}
            onChange={(e) => setInput({ ...input, zipCode: e.target.value })}
            placeholder="Par exemple 40032"
          />
        </div>

        <Button loading={loading} label="Ajouter une carte" onClick={addCardHandler} />
      </div>
    </ModalContainer>
  );
};

export default AddCardModal;
