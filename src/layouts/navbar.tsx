import { ModeToggle } from '@/components/mode-toggle'
import { NavigationBar } from '@/components/navigation-bar'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export function NavBar() {
	return (
		<div
			className={
				'flex items-center justify-between w-full py-3 xl:px-56 md:px-4 border-b border-solid'
			}
		>
			<div className={'flex items-center justify-normal cursor-pointer'}>
				<a href='/'>
					<Avatar className={'mx-3'}>
						<AvatarImage
							src='/1.svg'
							alt='iAutomaton'
						/>
						<AvatarFallback>CR</AvatarFallback>
					</Avatar>
				</a>
				<NavigationBar />
			</div>
			<ModeToggle />
		</div>
	)
}
