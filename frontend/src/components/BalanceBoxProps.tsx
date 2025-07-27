interface BalanceBoxProps {
  saldo: number;
  className?: string;
}

const BalanceBox = ({ saldo, className }: BalanceBoxProps) => (
  <div className={`p-4 pr-18 rounded-xl border border-secondary bg-whiteGray font-semibold text-secondary ${className}`}>
    <p className="font-normal">Balance Total</p>
    <h4 className="my-2 font-bold text-3xl">${saldo.toLocaleString("es-AR")}</h4>
  </div>
);

export default BalanceBox;
