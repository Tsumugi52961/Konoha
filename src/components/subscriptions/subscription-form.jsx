import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { createSubscription, getSubscription, updateSubscription } from '@/api/subscriptions'

export default function SubscriptionForm () {
  const history = useHistory()
  const { id } = useParams()
  const [name, setName] = useState('')
  const [rule, setRule] = useState('')
  const [status, setStatus] = useState(false)

  useEffect(() => {
    if (isUpdate()) {
      getSubscription(id).then(res => {
        setName(res.data.name)
        setRule(res.data.rule)
        setStatus(res.data.status)
      }).catch(err => {
        console.error(err)
      })
    }
  }, [id])

  const isUpdate = () => {
    return id > 0
  }

  const toggleStatus = () => {
    if (status === 'enabled') {
      setStatus('disabled')
    } else {
      setStatus('enabled')
    }
  }

  const submitSubscription = () => {
    if (isUpdate()) {
      submitUpdateSubscription()
    } else {
      submitCreateSubscription()
    }
  }

  const submitCreateSubscription = () => {
    createSubscription({ name, rule, status })
  }

  const submitUpdateSubscription = () => {
    updateSubscription({ id, name, rule, status })
  }

  return (
    <div className="subscription-form">
      <div>
        <span>Name</span>
        <input type="text" value={name} onChange={setName}/>
      </div>
      <div>
        <span>Rule</span>
        <input type="text" value={rule} onChange={setRule}/>
      </div>
      <div>
        <span>Status: </span>
        <span>{ status }</span>
        <button onClick={toggleStatus}>Switch Status</button>
      </div>
      <div>
        <button onClick={submitSubscription}>Submit</button>
      </div>
      <div>
        <button onClick={() => history.go(-1)}>Go Back</button>
      </div>
    </div>
  )
}
