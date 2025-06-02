"use client"

import { Button } from "@/components/ui/button";

export function UrlPreview(){
    
    async function submitAction(formData: FormData){
        const username = formData.get("username") as string

        if(username === ""){
            return;
        }

        console.log(username);
    }
    
    return(
       <div className="flex items-center flex-1 p-2 text-gray-100">
            <form
                className="flex flex-1 md:flex-row flex-col gap-4 items-start md:items-center"
                action={submitAction}
            >
                <div className="flex items-center justify-center w-full">
                    <p>
                        {process.env.NEXT_PUBLIC_HOST_URL}/creator/
                    </p>
                    <input
                        type="text"
                        className="flex-1 outline-none h-9 border-gray-300 bg-gray-5 text-black rounded-md px-1"
                        placeholder="Digite seu Nome de Usuário..."
                        name="username"
                    />
                </div>

                <Button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 h-9 w-full md:w-fit text-white px-4"
                >
                    Salvar
                </Button>
            </form>
       </div>
    )
}