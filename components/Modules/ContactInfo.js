export default function NewsPreview({ name, role, phone, email }) {
  return (
    <div className='w-[330px] h-[220px] flex flex-col gap-2.5 items-center justify-center p-6 rounded-lg border-4 border-accent-500 shadow-md tracking-wide'>
      <p className='text-2xl font-round '>{name}</p>
      <p className='font-bold font-cursive text-2xl'>{role}</p>
      <a href={`mailto:${email}`} className='underline font-medium text-secondary-800'>
        {email}
      </a>
      <p className='font-medium'>{phone}</p>
    </div>
  )
}
