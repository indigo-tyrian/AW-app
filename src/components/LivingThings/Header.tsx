const Header = ({ meta }: any) => {
  return (
    <div>
      <h1>{meta.title}</h1>
      <p>{meta.date}</p>
    </div>
  )
}

export default Header