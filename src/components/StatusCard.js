import CardStatusFooter from '@material-tailwind/react/CardStatusFooter'
import Icon from '@material-tailwind/react/Icon'

export default function StatusCard({
  color,
  icon,
  title,
  amount,
  percentage,
  percentageColor,
  percentageIcon,
  date,
}) {
  return (
    <div className="lg:px-4 mb-4 lg:mb-10 mt-4">
      <div className="c-bg  rounded-t-none rounded-b-xl">
        <div className=" border-black relative py-3  pl-5 ">
          <div className={`absolute -top-10 bg-${color}-500 rounded-full `}>
            <span className=" inline-block p-3 lg:p-4 ">
              <Icon name={icon} size={'2xl'} />
            </span>
          </div>
          <div className="float-right pr-4">
            <h2 className="text-white mb-4">{title}</h2>
            <h2 className="text-2xl">${amount || '000'}</h2>
          </div>
        </div>
        <div className="border-b border-[#846ff4] mt-2"></div>

        <CardStatusFooter
          amount={percentage || '0'}
          color={percentageColor}
          date={date}
          className="text-sm text-white pb-2 pl-2"
        >
          <Icon color={percentageColor} name={percentageIcon} />
        </CardStatusFooter>
      </div>
    </div>
  )
}
