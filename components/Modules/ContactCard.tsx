export default function ContactInfo({ name, role, phone, email }) {
  return (
    <div className='w-[330px] h-[230px] flex flex-col gap-2.5 items-center justify-center text-center p-6 rounded-lg border border-secondary-500 shadow tracking-wide text-secondary-700'>
      <p className='text-2xl font-round'>{name}</p>
      <p className='font-cursive text-2xl'>{role}</p>
      <p className='underline font-medium text-accent-700'>
        {email}
      </p>
      <p className='font-medium'>{phone}</p>
    </div>
  )
}
