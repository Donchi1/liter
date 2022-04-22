import Progress from '@material-tailwind/react/Progress'
import React from 'react'

function SpecialCard({ profile, payment, initial, total, bonus }) {
  return (
    <>
      <div className="token-info mt-x mb-8">
        <div className="info-wrapper one items-center justify-start space-x-40">
          <div className="pl-0 font-extrabold text-2xl  gradient-text ">
            ${profile?.totalBalance || '0000'}
          </div>
          <div className="token-descr">Deposites</div>
        </div>
        <Progress color="red" value={total?.toString()} />
      </div>
      <div className="token-info mt-x mb-4">
        <div className="info-wrapper two items-center justify-start space-x-56">
          <div className="pl-0 font-extrabold text-2xl  gradient-text ">
            {payment?.length}
          </div>
          <div className="token-descr">Investments</div>
        </div>
        <Progress color="red" value={initial?.toString()} />
      </div>
      <div className="token-info mt-x mb-4">
        <div className="info-wrapper three items-center justify-start space-x-40">
          <div className="pl-0 font-extrabold text-2xl  gradient-text ">
            ${profile?.bonus || '0000'}
          </div>
          <div className="token-descr">Bonus Balance</div>
        </div>
        <Progress color="red" value={bonus?.toString()} />
      </div>
      <div className="token-info mt-x mb-4">
        <div className="info-wrapper four items-center justify-start space-x-40">
          <div className="pl-0 font-extrabold text-2xl  gradient-text ">
            ${Number(profile?.totalBalance) + Number(profile?.bonus) || '0000'}
          </div>
          <div className="token-descr">Total Earned</div>
        </div>
        <Progress color="red" value={initial?.toString()} />
      </div>
    </>
  )
}

export default SpecialCard
