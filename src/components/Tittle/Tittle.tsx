interface Props {
  tittle:string;
}

export const Tittle = ({tittle}: Props) => {
  return (
    <h1 className="tittle">
      {tittle}
    </h1>
  )
}
