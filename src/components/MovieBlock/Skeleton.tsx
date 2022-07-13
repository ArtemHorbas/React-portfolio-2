import React, { FC } from 'react'
import ContentLoader from "react-content-loader"

export const Skeleton: FC = () => {
  return (
	<ContentLoader 
    speed={2}
    width={190}
    height={160}
    viewBox="0 0 190 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="80" y="98" rx="3" ry="3" width="63" height="7" /> 
    <rect x="297" y="160" rx="3" ry="3" width="176" height="3" /> 
    <circle cx="108" cy="57" r="35" /> 
    <rect x="112" y="162" rx="0" ry="0" width="13" height="32" /> 
    <rect x="114" y="173" rx="1" ry="1" width="18" height="16" /> 
    <rect x="82" y="114" rx="0" ry="0" width="24" height="7" /> 
    <rect x="82" y="139" rx="0" ry="0" width="24" height="7" /> 
    <rect x="105" y="164" rx="0" ry="0" width="24" height="7" /> 
    <rect x="82" y="126" rx="0" ry="0" width="24" height="7" /> 
    <rect x="125" y="128" rx="0" ry="0" width="22" height="15" />
  </ContentLoader>
  )
}
