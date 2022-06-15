import React from 'react'
import TeacherCard  from "./TeacherCard.js"
import female from "./male.png"
import male from "./female.png"
export default function Addcard({teachers}) {
  return (
    teachers.data.map(element => {
        return <TeacherCard   imgname={female}  name={element.first_name} lastname={element.last_name} />
            })
  )
}
