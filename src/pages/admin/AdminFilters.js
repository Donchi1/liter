import React from 'react'
import { Filter, SearchInput } from 'react-admin'

export const UserFilter = (props) => (
  <Filter {...props}>
    <SearchInput
      source={'email' || "uid" || 'firstname' || 'lastname'}
      resettable
      alwaysOn
    />
  </Filter>
)
export const SavingsFilter = (props) => (
  <Filter {...props}>
    <SearchInput
      source={'uid' || 'email' || 'firstname' || 'lastname'}
      resettable
      alwaysOn
    />
  </Filter>
)
export const PaymentFilter = (props) => (
  <Filter {...props}>
    <SearchInput
      source={'uid' || 'email' || 'firstname' || 'lastname'}
      resettable
      alwaysOn
    />
  </Filter>
)
export const WithdrawalFilter = (props) => (
  <Filter {...props}>
    <SearchInput
      source={'uid' || 'email' || 'firstname' || 'lastname'}
      resettable
      alwaysOn
    />
  </Filter>
)
export const TestimonialFilter = (props) => (
  <Filter {...props}>
    <SearchInput
      source={'uid' || 'email' || 'firstname' || 'lastname'}
      resettable
      alwaysOn
    />
  </Filter>
)
export const LetterFilter = (props) => (
  <Filter {...props}>
    <SearchInput
      source={'uid' || 'email' || 'firstname' || 'lastname'}
      resettable
      alwaysOn
    />
  </Filter>
)
export const ContactFilter = (props) => (
  <Filter {...props}>
    <SearchInput
      source={'uid' || 'email' || 'firstname' || 'lastname'}
      resettable
      alwaysOn
    />
  </Filter>
)
