import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { useUserStateContext } from "../../contexts/AuthContext";
import { useBasketContext } from "../../contexts/BasketContext";

export default function Mymodal(){
  const [state, , , ,clearBasket] = useBasketContext();
  const dataId = state.map(item => item.id)
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [adress, setAdress] = useState<string>('');
  const user = useUserStateContext();
  const onSubmitHandler = () => {
    if(localStorage.getItem('orders') === null){ localStorage.setItem('orders','[]') };
    const oldData = JSON.parse(localStorage.getItem('orders') as string);
    const newdata = [...oldData ,{user:user.username , adress, quantity: state.length ,createDate: new Date().toISOString() ,product: state}];
    localStorage.setItem(`orders`, JSON.stringify(newdata));
    
    setAdress('');
    clearBasket(dataId);
    onClose();
  }
  return (
    <>
     <Button width="100%" colorScheme="messenger" onClick={onOpen}> SIFARISH ET </Button> 
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> Sifaris Et </ModalHeader>
          <ModalCloseButton />

          <ModalBody pb={6}>
            <FormControl>
              <FormLabel> ÜNVAN </FormLabel>
              <Textarea 
                placeholder="Unvan" 
                value={adress}
                onChange = {(e: React.ChangeEvent<HTMLTextAreaElement>)=> setAdress(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onSubmitHandler}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
