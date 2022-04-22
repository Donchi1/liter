//import React from 'react'
//import { useSelector } from 'react-redux-firebase'
//import { useFirestoreConnect } from 'react-redux-firebase'
//import moment from 'moment'
//import Card from '@material-tailwind/react/Card'
//import CardHeader from '@material-tailwind/react/CardHeader'
//import CardBody from '@material-tailwind/react/CardBody'
//import Button from '@material-tailwind/react/Button'
//
//function UserInfo() {
//  const userProfile = useSelector((state) => state.firebase.profile)
//  const userInfo = useSelector((state) => state.firestore.ordered)
//
//
//
//  useFirestoreConnect([
//    { collection: 'users' },
//    { collection: 'withdrawals', doc: userProfile.uid },
//    { collection: 'payments', doc: userProfile.uid },
//  ])
//
//  return (
//    <Card className="bg-[#322194]">
//      <CardHeader color="blue" contentPosition="none">
//        <div className="w-full flex items-center justify-between">
//          <h2 className="text-white text-2xl">Users Information</h2>
//          <Button
//            color="transparent"
//            buttonType="link"
//            size="lg"
//            style={{ padding: 0 }}
//          >
//            See More
//          </Button>
//        </div>
//      </CardHeader>
//      <CardBody>
//        <div className="overflow-x-auto">
//          <table className="items-center w-full bg-transparent border-collapse">
//            <thead>
//              <tr>
//                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
//                  ID
//                </th>
//                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
//                  Type
//                </th>
//
//                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
//                  Name
//                </th>
//                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
//                  amount
//                </th>
//                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
//                  Date
//                </th>
//                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
//                  Status
//                </th>
//              </tr>
//            </thead>
//            <tbody>
//              {payments &&
//                payments.map((each) => (
//                  <tr key={each.uid}>
//                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
//                      {each.idx.slice(0, 5)}
//                    </th>
//                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
//                      Payment
//                    </td>
//                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
//                      {each.firstname}
//                    </td>
//                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
//                      {each.paymentAmount}
//                    </td>
//                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
//                      {moment(each.date.toDate()).calendar()}
//                    </td>
//                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
//                      {each.statusSuccess && (
//                        <span className="border border-green-500 text-green-500 rounded-full p-8">
//                          success
//                        </span>
//                      )}
//                      {each.statusFailed && (
//                        <span className="border border-red-600 text-red-600 rounded-full p-8">
//                          Failed
//                        </span>
//                      )}
//                      {each.statusPending && (
//                        <span className="border border-yellow-500 text-yellow-500 rounded-full p-8">
//                          Pending
//                        </span>
//                      )}
//                    </td>
//                  </tr>
//                ))}
//              {payments?.length < 1 && (
//                <tr>
//                  <td
//                    colSpan={5}
//                    className=" text-red-500 uppercase text-center pt-8 text-xl font-bold pb-12"
//                  >
//                    No transaction Yet
//                  </td>
//                </tr>
//              )}
//            </tbody>
//          </table>
//        </div>
//      </CardBody>
//    </Card>
//  )
//}

//export default UserInfo
