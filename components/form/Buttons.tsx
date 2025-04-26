'use client'
import { ReloadIcon } from '@radix-ui/react-icons';
import { Loader2 } from "lucide-react"
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { SignInButton } from "@clerk/nextjs";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { LuTrash2, LuSquare } from "react-icons/lu";
import { useFormStatus } from "react-dom";

type btnSize = 'default' | 'lg' | 'sm';

type SubmitButtonProps = {
  className?: string;
  text?: string;
  size?: btnSize;
};

export function SubmitBUtton({className = '',text = 'submit',size = 'lg',}:SubmitButtonProps){
  const {pending} = useFormStatus()
  return <Button type='submit' disabled={pending} className={cn('capitalize',className)} size={size}>
    {pending ? <>
    <ReloadIcon className='mr-2 h-4 w-4 animate-spin'/>
    please wait...
    </>:text}
  </Button>
}