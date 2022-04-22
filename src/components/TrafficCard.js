import Card from '@material-tailwind/react/Card'
import CardHeader from '@material-tailwind/react/CardHeader'
import CardBody from '@material-tailwind/react/CardBody'
import Button from '@material-tailwind/react/Button'
import Progress from '@material-tailwind/react/Progress'
import { useHistory } from 'react-router-dom'

export default function TrafficCard({
  profile,
  payment,
  initial,
  total,
  bonus,
}) {
  const { push } = useHistory()
  return (
    <Card className="c-bg">
      <CardHeader color="purple" contentPosition="none">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-white text-2xl">Account Info</h2>
          <Button
            color="transparent"
            buttonType="link"
            size="lg"
            style={{ padding: 0 }}
            onClick={() => push('/user/profile')}
          >
            See More
          </Button>
        </div>
      </CardHeader>
      <CardBody>
        <div className="overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead className="thead-light">
              <tr>
                <th className="px-2 text-purple-400 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Datas
                </th>
                <th className="px-2 text-purple-400 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Values
                </th>
                <th className="px-2 text-purple-400 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left w-56"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="border-b text-white border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  Deposites
                </th>
                <td className="border-b text-white border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  ${profile?.totalBalance}
                </td>
                <td className="border-b  border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  <Progress color="blue" value={total?.toString()} />
                </td>
              </tr>
              <tr>
                <th className="border-b text-white border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  Investments
                </th>
                <td className="border-b text-white border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  {payment?.length}
                </td>
                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  <Progress color="red" value={initial?.toString()} />
                </td>
              </tr>
              <tr>
                <th className="border-b text-white border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  Bonus
                </th>
                <td className="border-b text-white border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  ${profile?.bonus}
                </td>
                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  <Progress color="indigo" value={bonus?.toString()} />
                </td>
              </tr>
              <tr>
                <th className="border-b text-white border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  Total Earned
                </th>
                <td className="border-b text-white border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  $
                  {Number(profile?.totalBalance) + Number(profile?.bonus) ||
                    '0000'}
                </td>
                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  <Progress color="lightBlue" value={total?.toString()} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>
  )
}
