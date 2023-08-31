const SocialMediaIcons = () => {
  return (
    <div className='flex justify-center md:justify-start my-10 gap-7'>
      <a
        className='hover:opacity-50 transition duration-500'
        href='https://www.linkedin.com/in/josephine-han/'
        target='_blank'
        rel='noreferrer'
      >
        <i className='fab fa-linkedin-in' color='white'></i>
      </a>
      <a
        className='link'
        href='https://github.com/josiehandeveloper'
        target='_blank'
        rel='noreferrer'
      >
        <i className='fab fa-github'></i>
      </a>
      <a
        className='link'
        href='https://docs.google.com/viewer?url=https://docs.google.com/document/d/1aSMDBButRYQEdWI7NGBPORGpolytGyysqtswP2vPVoQ/export?format=pdf'
        target='_blank'
        rel='noreferrer'
      >
        <i className='far fa-file-alt' color='white'></i>
      </a>
    </div>
  );
};

export default SocialMediaIcons;
