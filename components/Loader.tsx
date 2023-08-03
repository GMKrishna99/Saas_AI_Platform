import Image from "next/image"
import LogoImage from '@/public/logo.png'
export const Loader = () => {
    return (
        <div className="h-full flex flex-col gap-y-4 items-center justify-center">
            <div className="w-10 h-10 relative animate-spin">
                <Image
                    alt="logo"
                    fill
                    src={LogoImage}
                />
            </div>
            <p className="text-sm to-muted-foreground">Genius is thinking ...</p>
        </div>
    )
}