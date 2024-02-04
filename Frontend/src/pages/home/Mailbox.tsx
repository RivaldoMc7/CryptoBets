import { GearApi, decodeAddress } from "@gear-js/api";
import { Button, Input } from "@gear-js/ui";
import { useAlert } from "@gear-js/react-hooks";
import { useState } from "react";
import { isAddress } from "@polkadot/util-crypto";

function Mailbox() {
  const alert = useAlert();
  const [list, setList] = useState<any | undefined>([]);
  const [address, setAddress] = useState<any | undefined>("");

  const getmailbox = async () => {
    const gearApi = await GearApi.create({
      providerAddress: "wss://testnet.vara.rs",
    });

    // Get mailbox
    if (isAddress(address)) {
      const mailbox = await gearApi.mailbox.read(decodeAddress(address));
      console.log(address);
      setList(mailbox);
      console.log(mailbox);
    } else {
      alert.error("Add valid public address");
    }
  };

  const AddressInputChange = (event: any) => {
    setAddress(event.target.value);
  };

  return (
    <div className="mailbox">
      <center>Mailbox</center>
      <center className="container">
        Introduce your Address
        <Input type="text" value={address} onChange={AddressInputChange} />
        <Button text="Get Mailbox" onClick={getmailbox} />
      </center>
    </div>
  );
}
export { Mailbox };
