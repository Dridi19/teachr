import React from 'react'
import TeacherCard  from "./TeacherCard.js"
import male from "./male.png"
import female from "./female.png"
export default function Addcard({teachers}) {
  return (
    teachers.data.map(element => {
        return <TeacherCard   imgname={male}  name={element.first_name} lastname={element.last_name} />
            })
  )
}
