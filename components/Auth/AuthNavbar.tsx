import MenuSheet from "../menu-sheet"

const AuthNavbar = () => {
  return (
    <div className="h-16 flex flex-row items-center justify-end">
      <div className="flex flex-row gap-6">
        <MenuSheet />
      </div>
    </div>
  )
}

export default AuthNavbar
