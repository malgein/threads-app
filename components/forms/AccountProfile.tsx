"use client"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserValidation } from "@/lib/validations/user";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import React from 'react'

interface Props {
    user: {
      id: string;
      objectId: string;
      username: string;
      name: string;
      bio: string;
      image: string;
    };
    btnTitle: string;
  }  

const AccountProfile = ({ user, btnTitle }: Props) => {

	const form = useForm({
		resolver: zodResolver(UserValidation),
		defaultValues: {
      profile_photo: user?.image ? user.image : "",
      name: user?.name ? user.name : "",
      username: user?.username ? user.username : "",
      bio: user?.bio ? user.bio : "",
    },
	})

  return (
    <Form>

		</Form>
  )
}

export default AccountProfile