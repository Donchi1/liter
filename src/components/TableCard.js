import Card from '@material-tailwind/react/Card'
import CardHeader from '@material-tailwind/react/CardHeader'
import CardBody from '@material-tailwind/react/CardBody'
import { useSelector } from 'react-redux'
import moment from 'moment'

export default function CardTable() {
  const { withdrawalInDatabase, paymentInDatabase } = useSelector(
    (state) => state.firestore.ordered,
  )
  return (
    <Card className=" c-bg text-white">
      <CardHeader color="r" contentPosition="left">
        <h2 className="gradient-text text-2xl">Transaction History</h2>
      </CardHeader>
      <CardBody>
        <div className="overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-2 text-white align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  ID
                </th>
                <th className="px-2 text-white align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Type
                </th>

                <th className="px-2 text-white align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Name
                </th>
                <th className="px-2 text-white align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  amount
                </th>
                <th className="px-2 text-white align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Date
                </th>
                <th className="px-2 text-white align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {paymentInDatabase &&
                paymentInDatabase.map((each) => (
                  <tr key={each.uid}>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      {each.idx.slice(0, 5)}
                    </th>
                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      Payment
                    </td>
                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      {each.firstname}
                    </td>
                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      {each.paymentAmount}
                    </td>
                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      {moment(each.date.toDate()).calendar()}
                    </td>
                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      {each.statusSuccess && (
                        <span className="border border-green-500 text-green-500 rounded-full p-4">
                          success
                        </span>
                      )}
                      {each.statusFailed && (
                        <span className="border border-red-600 text-red-600 rounded-full p-4">
                          Failed
                        </span>
                      )}
                      {each.statusPending && (
                        <span className="border border-yellow-500 text-yellow-500 rounded-full p-4">
                          Pending
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              {paymentInDatabase?.length < 1 && (
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
                <th className="px-2 text-white align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  ID
                </th>
                <th className="px-2 text-white align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Type
                </th>
                <th className="px-2 text-white align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Name
                </th>
                <th className="px-2 text-white align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  amount
                </th>
                <th className="px-2 text-white align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Date
                </th>
                <th className="px-2 text-white align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {withdrawalInDatabase &&
                withdrawalInDatabase.map((each) => (
                  <tr key={each.uid}>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      {each.idx.slice(0, 5)}
                    </th>
                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      Withdrawal
                    </td>
                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      {each.withdrawerName}
                    </td>
                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      {each.withdrawalAmount}
                    </td>
                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      {moment(each.date.toDate()).calendar()}
                    </td>
                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      {each.statusSuccess && (
                        <span className="border border-green-500 text-green-500 rounded-full p-4">
                          success
                        </span>
                      )}
                      {each.statusFailed && (
                        <span className="border border-red-600 text-red-600 rounded-full p-4">
                          Failed
                        </span>
                      )}
                      {each.statusPending && (
                        <span className="border border-yellow-500 text-yellow-500 rounded-full p-4">
                          Pending
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              {withdrawalInDatabase?.length < 1 && (
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
