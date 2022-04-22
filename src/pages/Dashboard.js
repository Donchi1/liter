import StatusCard from 'components/StatusCard'
import ChartLine from 'components/ChartLine'
import ChartBar from 'components/ChartBar'
import PageVisitsCard from 'components/PageVisitsCard'
import TrafficCard from 'components/TrafficCard'
import SpecialCard from 'components/SpecialCard'
import { useSelector } from 'react-redux'

export default function Dashboard() {
  const { withdrawalInDatabase, paymentInDatabase } = useSelector(
    (state) => state.firestore.ordered,
  )
  const userProfileInfo = useSelector((state) => state.firebase.profile)

  const initialDCheck = () => {
    const initialNumber = Number(userProfileInfo.initialDeposite)
    if (initialNumber === 200) {
      return 10
    }
    if (initialNumber <= 500 && initialNumber > 200) {
      return 50
    }
    if (initialNumber <= 1000 && initialNumber > 500) {
      return 70
    }
    if (initialNumber >= 1000) {
      return 100
    }
    return 0
  }

  const totalDCheck = () => {
    const initialNumber = Number(userProfileInfo.totalBalance)
    if (initialNumber === 200) {
      return 10
    }
    if (initialNumber <= 500 && initialNumber > 200) {
      return 50
    }
    if (initialNumber <= 1000 && initialNumber > 500) {
      return 70
    }
    if (initialNumber >= 1000) {
      return 100
    }
    return 0
  }
  const bonusDCheck = () => {
    const initialNumber = Number(userProfileInfo.bonus)
    if (initialNumber === 200) {
      return 10
    }
    if (initialNumber <= 500 && initialNumber > 200) {
      return 50
    }
    if (initialNumber <= 1000 && initialNumber > 500) {
      return 70
    }
    if (initialNumber >= 1000) {
      return 100
    }
    return 0
  }
  const profitDCheck = () => {
    const initialNumber = Number(userProfileInfo.profit)
    if (initialNumber === 200) {
      return 10
    }
    if (initialNumber <= 500 && initialNumber > 200) {
      return 50
    }
    if (initialNumber <= 1000 && initialNumber > 500) {
      return 70
    }
    if (initialNumber >= 1000) {
      return 100
    }
    return 0
  }

  return (
    <div className="footer-bg  homepage-3">
      <div className=" px-3 md:px-8 h-20 pt-10 " />

      <div className="px-3 md:px-8">
        <div className=" container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4 text-white">
            <StatusCard
              color="pink"
              icon="money"
              title="Initial"
              amount={userProfileInfo.initialDeposite}
              percentage={initialDCheck()}
              percentageIcon={
                initialDCheck() > 50 ? 'arrow_upward' : 'arrow_downward'
              }
              percentageColor={initialDCheck() > 50 ? 'green' : 'red'}
              date="Since last month"
            />
            <StatusCard
              color="orange"
              icon="storage"
              title="Balance"
              amount={userProfileInfo.totalBalance}
              percentage={totalDCheck()}
              percentageIcon={
                totalDCheck() > 50 ? 'arrow_upward' : 'arrow_downward'
              }
              percentageColor={totalDCheck() > 50 ? 'green' : 'red'}
              date="Since last week"
            />
            <StatusCard
              color="purple"
              icon="paid"
              title="Profits"
              amount={userProfileInfo.profit}
              percentage={profitDCheck()}
              percentageIcon={
                profitDCheck() > 50 ? 'arrow_upward' : 'arrow_downward'
              }
              percentageColor={profitDCheck() > 50 ? 'green' : 'red'}
              date="Since yesterday"
            />
            <StatusCard
              color="blue"
              icon="poll"
              title="Bonus"
              amount={userProfileInfo.bonus}
              percentage={bonusDCheck()}
              percentageIcon={
                bonusDCheck() > 50 ? 'arrow_upward' : 'arrow_downward'
              }
              percentageColor={bonusDCheck() > 50 ? 'green' : 'red'}
              date="Since last month"
            />
          </div>
        </div>
      </div>

      <div className="px-3 md:px-8 ">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 xl:grid-cols-5">
            <div className="xl:col-start-1 xl:col-end-12 lg:px-4 mb-14">
              <ChartLine />
            </div>
            <div className=" hidden xl:col-start-4 xl:col-end-6 lg:px-4 mb-14">
              <ChartBar />
            </div>
          </div>
        </div>
      </div>
      <div className="px-3 md:px-8 h-auto">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 xl:grid-cols-5">
            <div className="xl:col-start-1 xl:col-end-4 lg:px-4 mb-14">
              <PageVisitsCard
                withdrawals={withdrawalInDatabase}
                payments={paymentInDatabase}
              />
            </div>
            <div className="xl:col-start-4 xl:col-end-6 lg:px-4 mb-14">
              <SpecialCard
                profile={userProfileInfo}
                payment={paymentInDatabase}
                initial={initialDCheck}
                total={totalDCheck}
                bonus={bonusDCheck}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
