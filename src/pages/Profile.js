import SettingsForm from 'components/SettingsForm'
import ProfileCard from 'components/ProfileCard'
import { useSelector } from 'react-redux'

export default function Dashboard() {
  const profileInfo = useSelector((state) => state.firebase.profile)

  return (
    <>
      <div className="  lg:px-4 h-auto pt-24">
        <div className="container footer-bg  homepage-3 mx-auto max-w-full">
          <div className="grid grid-cols-1 xl:grid-cols-6">
            <div className="xl:col-start-1 xl:col-end-5 lg:px-4 mb-16">
              <SettingsForm profileInfo={profileInfo} />
            </div>
            <div className="xl:col-start-5 xl:col-end-7 lg:px-4 mb-16 mt-14">
              <ProfileCard profileInfo={profileInfo} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
