import { ModeToggle } from '@/components/mode-toggle'
import { NavigationBar } from '@/components/navigation-bar'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export function NavBar() {
	return (
		<div
			className={
				'flex items-center justify-between w-full py-3 px-56 border-b border-solid'
			}
		>
			<div className={'flex items-center justify-normal'}>
				<Avatar className={'mx-3'}>
					<AvatarImage
						src="https://github.com/chamale-rac.png"
						alt="@chamale-rac"
					/>
					<AvatarFallback>CR</AvatarFallback>
				</Avatar>
				<NavigationBar />
			</div>
			<ModeToggle />
		</div>
	)
}
