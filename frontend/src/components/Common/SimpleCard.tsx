export function SimpleCard ({ children, title }: { children: React.ReactNode, title: string }) {
  return (
    <div className="flex flex-col gap-7 bg-[#27322F3D]/76 rounded-4xl p-13 backdrop-blur-xs w-[490px] text-xl font-light">
      <p>{title}</p>
      <hr />
      {children}
    </div>
  )
}