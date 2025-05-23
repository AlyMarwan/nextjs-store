'use client'
import { ReloadIcon } from '@radix-ui/react-icons';
import { Loader2 } from "lucide-react"
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { SignInButton, SignOutButton } from "@clerk/nextjs";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { LuTrash2 } from "react-icons/lu";
import { useFormStatus } from "react-dom";
import { FaEdit } from "react-icons/fa";

type btnSize = 'default' | 'lg' | 'sm';

type SubmitButtonProps = {
  className?: string;
  text?: string;
  size?: btnSize;
};

export function SubmitButton({className = '',text = 'submit',size = 'lg',}:SubmitButtonProps){
  const {pending} = useFormStatus()
  return <Button type='submit' disabled={pending} className={cn('capitalize',className)} size={size}>
    {pending ? <>
    <ReloadIcon className='mr-2 h-4 w-4 animate-spin'/>
    please wait...
    </>:text}
  </Button>
}

type actionType = 'edit' | 'delete'

export const IconButton = ({actionType}:{actionType:actionType})=>{
  const {pending} = useFormStatus()
  const  renderIcon = ()=>{
    switch(actionType){
      case 'edit':
        return <FaEdit />
      case 'delete':
        return <LuTrash2 />
    }
  }
  return <Button type='submit' size='icon' variant='link' className='p-2 cursor-pointer'>
    {pending? <ReloadIcon className='animate-spin'/> : renderIcon()}
  </Button>
}


export const CardSignInButton = () =>{
  return <SignInButton mode='modal'>
    <Button type='button' size='icon' variant='outline' className='p-2 cursor-pointer' asChild>
      <FaRegHeart/>
    </Button>
  </SignInButton>
}

export const CardSubmitButton = ({isFavorite}:{isFavorite:boolean}) =>{
  const {pending} = useFormStatus()
  return <Button type='submit' size='icon' variant='outline' className='p-2 cursor-pointer'>
    {pending? (<ReloadIcon className='animate-spin'/>) : (isFavorite? <FaHeart/>: <FaRegHeart/>)}
  </Button>
}