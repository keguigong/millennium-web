import React from 'react'

function Icon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        stroke="none"
        strokeWidth="1"
        d="M9.499 12.214v1.41h-1.5v-1.41h1.5zm-.75-5.927a2.477 2.477 0 012.474 2.474 2.479 2.479 0 01-1.724 2.357v.591h-1.5V9.734h.75a.974.974 0 10-.974-.973h-1.5a2.477 2.477 0 012.474-2.474zM5.423.27C7.38-.396 9.522.198 10.902 1.75c1.144-.239 2.217-.038 3.063.58.826.605 1.354 1.56 1.499 2.679 1.34.442 2.08 1.89 2.032 3.241-.054 1.527-1.162 3.066-3.514 3.066h-2.233v-1.5h2.233c1.766 0 1.998-1.132 2.015-1.619.029-.829-.458-1.76-1.297-1.82l-.695-.05-.002-.696c-.002-.9-.34-1.662-.923-2.09-.576-.421-1.368-.499-2.231-.228l-.514.162-.317-.435c-.802-1.096-1.94-1.534-2.978-1.534-.401 0-.788.065-1.136.183-1.324.45-2.093 1.587-2.06 3.041l.014.565-.54.168c-1.93.603-1.86 2.093-1.792 2.535.134.881.784 1.818 1.723 1.818h2.5v1.5h-2.5c-1.56 0-2.937-1.329-3.206-3.092-.206-1.35.3-3.142 2.317-4.005.148-1.86 1.286-3.348 3.063-3.95z"
        transform="translate(3 6)"
      ></path>
    </svg>
  )
}

export default Icon