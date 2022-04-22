import Card from '@material-tailwind/react/Card'
import CardBody from '@material-tailwind/react/CardBody'
import CardFooter from '@material-tailwind/react/CardFooter'
import Image from '@material-tailwind/react/Image'
import H5 from '@material-tailwind/react/Heading5'
import Icon from '@material-tailwind/react/Icon'
import LeadText from '@material-tailwind/react/LeadText'

import ProfilePicture from '../assets/img/avater.png'

export default function ProfileCard({ profileInfo }) {
  return (
    <Card className="c-bg ">
      <div className="flex flex-wrap justify-center text-white">
        <div className="w-48 px-4 -mt-24 hover:cursor-pointer ">
          <Image src={profileInfo?.photo || ProfilePicture} rounded raised />
        </div>
        <div className="w-full flex justify-center py-4 lg:pt-4 pt-8">
          <div className="p-4 text-center">
            <span className="text-xl font-medium block uppercase tracking-wide text-white">
              ${profileInfo?.totalBalance}
            </span>
            <span className="text-sm gradient-text">Total Balance</span>
          </div>
          <div className="p-4 text-center">
            <span className="text-xl font-medium block uppercase tracking-wide text-white">
              ${profileInfo?.initialDeposite}
            </span>
            <span className="text-sm gradient-text">Initial Deposite</span>
          </div>
          <div className="p-4 text-center">
            <span className="text-xl font-medium block uppercase tracking-wide text-white">
              ${profileInfo?.bonus}
            </span>
            <span className="text-sm gradient-text">Bonus</span>
          </div>
        </div>
      </div>
      <div className="text-center">
        <H5 color="gray">
          {' '}
          {profileInfo?.firstname} {profileInfo?.lastname}
        </H5>
        <div className="mt-0 mb-2 text-white flex items-center justify-center gap-2">
          <Icon name="place" size="xl" />
          {profileInfo?.address}
        </div>
        <div className="mb-2 text-white mt-10 flex items-center justify-center gap-2">
          <Icon name="work" size="xl" />
          {profileInfo?.occupation}
        </div>
      </div>
      <CardBody>
        <div className="border-t border-lightBlue-200 text-center px-2 text-white">
          <LeadText color="blueGray" children={'sjgdjhdjkhd'}>
            {profileInfo?.aboutMe}
          </LeadText>
        </div>
      </CardBody>
      <CardFooter>
        <div className="w-full flex justify-center -mt-8"></div>
      </CardFooter>
    </Card>
  )
}
