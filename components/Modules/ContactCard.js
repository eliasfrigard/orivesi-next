export default function ContactInfo({ name, role, phone, email }) {
  return (
    <div className='w-[330px] h-[230px] flex flex-col gap-2.5 items-center justify-center text-center p-6 rounded-lg border border-secondary-800 shadow tracking-wide text-secondary-800'>
      <p className='text-2xl font-round'>{name}</p>
      <p className='font-cursive text-2xl'>{role}</p>
      <a href={`mailto:${email}`} className='underline font-medium text-accent-800'>
        {email}
      </a>
      <p className='font-medium'>{phone}</p>
    </div>
  )
}
