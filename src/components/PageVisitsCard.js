import Card from '@material-tailwind/react/Card'
import CardHeader from '@material-tailwind/react/CardHeader'
import CardBody from '@material-tailwind/react/CardBody'
import Button from '@material-tailwind/react/Button'
import { useHistory } from 'react-router-dom'
import moment from 'moment'

export default function PageVisitsCard({ withdrawals, payments }) {
  const { push } = useHistory()
  return (
    <Card className="c-bg ">
      <CardHeader color="b" contentPosition="none">
        <div className="w-full flex items-center justify-between mt-4">
          <h2 className=" gradient-text  text-2xl">Transaction History</h2>
          <button
            className="bg-gradient-to-tr from-[#846ff4] to-[#f17674] py-4 px-6 rounded-full"
            onClick={() => push('/user/history')}
          >
            See More
          </button>
        </div>
      </CardHeader>
      <CardBody>
        <div className="overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-2 text-white align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  ID
                </th>
                <th className="px-2 text-white align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left ">
                  Type
                </th>

                <th className="px-2 text-white align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left ">
                  Name
                </th>
                <th className="px-2 text-white align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left ">
                  amount
                </th>
                <th className="px-2 text-white align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Date
                </th>
                <th className="px-2 text-white align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left ">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {payments &&
                payments.map((each) => (
                  <tr key={each.uid}>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left text-white">
                      {each.idx.slice(0, 5)}
                    </th>
                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left text-white">
                      Payment
                    </td>
                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left text-white">
                      {each.firstname}
                    </td>
                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left text-white">
                      {each.paymentAmount}
                    </td>
                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left text-white">
                      {moment(each.date.toDate()).calendar()}
                    </td>
                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left text-white">
                      {each.statusSuccess && (
                        <span className="border border-green-500 text-green-500 rounded-full p-8">
                          success
                        </span>
                      )}
                      {each.statusFailed && (
                        <span className="border border-red-600 text-red-600 rounded-full p-8">
                          Failed
                        </span>
                      )}
                      {each.statusPending && (
                        <span className="border border-yellow-500 text-yellow-500 rounded-full p-8">
                          Pending
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              {payments?.length < 1 && (
                <tr>
                  <td
                    colSpan={5}
                    className=" text-red-500 uppercase text-center pt-8 text-sm font-bold pb-12"
                  >
                    No transaction Yet
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-2 text-white align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left ">
                  ID
                </th>
                <th className="px-2 text-white align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left ">
                  Type
                </th>
                <th className="px-2 text-white align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left ">
                  Name
                </th>
                <th className="px-2 text-white align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left ">
                  amount
                </th>
                <th className="px-2 text-white align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left ">
                  Date
                </th>
                <th className="px-2 text-white align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left ">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {withdrawals &&
                withdrawals.map((each) => (
                  <tr key={each.uid}>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left text-white">
                      {each.idx.slice(0, 5)}
                    </th>
                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left text-white">
                      Withdrawal
                    </td>
                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left text-white">
                      {each.withdrawerName}
                    </td>
                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left text-white">
                      {each.withdrawalAmount}
                    </td>
                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left text-white">
                      {moment(each.date.toDate()).calendar()}
                    </td>
                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left text-white">
                      {each.statusSuccess && (
                        <span className="border border-green-500 text-green-500 rounded-full p-8">
                          success
                        </span>
                      )}
                      {each.statusFailed && (
                        <span className="border border-red-600 text-red-600 rounded-full p-8">
                          Failed
                        </span>
                      )}
                      {each.statusPending && (
                        <span className="border border-yellow-500 text-yellow-500 rounded-full p-8">
                          Pending
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              {withdrawals?.length < 1 && (
                <tr>
                  <td
                    colSpan={5}
                    className=" text-red-500 uppercase text-center pt-8 text-sm font-bold pb-12"
                  >
                    No transaction Yet
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>
  )
}
