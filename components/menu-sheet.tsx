import { BadgeInfo, Blend, LayoutDashboardIcon, LogOut, Menu, User2, Users2 } from "lucide-react"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Link } from "react-router"
import { useAuth } from "@/hooks/useAuth"
import { useTranslation } from "react-i18next"
import ChangeLanguage from "./change-language"

const MenuSheet = () => {
  const { t } = useTranslation();
  const { isAuthenticated, logout } = useAuth();

  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Menu size={28} strokeWidth={2} />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className="mt-10 gap-3">
            <Link to='/'>
              <Button variant={'secondary'} className="w-full justify-start items-center py-4">
                <Users2 className="mr-2" />
                {t('find_mentor')}
              </Button>
            </Link>
            {isAuthenticated && (
              <>
                <Link to={"/profile"}>
                  <Button variant={'secondary'} className="justify-start items-center py-4 w-full">
                    <User2 className="mr-2" />
                    {t('profile')}
                  </Button>
                </Link>

                <Link to={"/dashboard"}>
                  <Button variant={'secondary'} className="justify-start items-center py-4 w-full">
                    <LayoutDashboardIcon className="mr-2" />
                    {t('dashboard')}
                  </Button>
                </Link>
              </>
            )}
            <Button variant={'secondary'} className="justify-start items-center py-4" disabled>
              <Blend className="mr-2" />
              {t('categories')}
            </Button>
            <Button variant={'secondary'} className="justify-start items-center py-4" disabled>
              <BadgeInfo className="mr-2" />
              {t('about_us')}
            </Button>
          </SheetHeader>
          <SheetFooter className="flex flex-col gap-3">
            <ChangeLanguage />
            {isAuthenticated ? (
              <>
                <Button className="w-full justify-start" size={'lg'} onClick={logout}>
                  <LogOut />
                  {t('logout')}
                </Button>
              </>
            ) : (
              <>
                <Link to={'/login'}>
                  <Button variant={'secondary'} className="w-full">
                    {t('login')}
                  </Button>
                </Link>
                <Link to={'/register'}>
                  <Button className="w-full">
                    {t('sign_up')}
                  </Button>
                </Link>
              </>
            )}
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MenuSheet
