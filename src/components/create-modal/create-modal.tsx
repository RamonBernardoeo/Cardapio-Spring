    import React, { useEffect, useState } from 'react';
import { useFoodDataMutate } from '../../hooks/useFoodDataMutate';
import { foodData } from '../interface/FoodData';
import "./modal.css"


    interface InputProps {
        label: string,
        value: string | number,
        updateValue: (value: any) => void
    }

    interface ModalProps{
            closeModal(): void
    }

    const Input = ({ label, value, updateValue }: InputProps) => {
        return (
            <>
                <label htmlFor={label}>{label}</label>
                <input type="text" value={value} onChange={event => updateValue(event.target.value)} />
            </>
        )
    }



    export default function CreateModal({closeModal}: ModalProps) {
        const [title, setTitle] = useState('');
        const [image, setImage] = useState('');
        const [price, setPrice] = useState('');
        const {mutate, isSuccess, isLoading} = useFoodDataMutate();


        const submit = () => {
            const foodData: foodData = {
                title, price, image
            }
            mutate(foodData)
        }

        useEffect(() =>{
            if(!isSuccess) return

            if(isSuccess){
                closeModal()
            }
        }, [isSuccess])
        return (
            <div className="modal-overlay">
                <div className="modal-body">
                    <h2>Cadastrar Novo Item</h2>
                    <form action="" className="input-container">
                        {/* Use o componente de entrada personalizado */}
                        <Input label="Title" value={title} updateValue={setTitle} />
                        <Input label="image" value={image} updateValue={setImage} />
                        <Input label="price" value={price} updateValue={setPrice} />
                        
                    </form>
                    <button onClick={submit} className='btn-secondary'>Postar</button>
                    {isLoading ? "Postando..." : "Postar"}
                </div>
            </div>
        );
    }