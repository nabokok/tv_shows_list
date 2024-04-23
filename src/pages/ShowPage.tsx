import StarIcon from '@/components/Icons/StarIcon';
import NoResult from '@/components/NoResult';
import useFetch from '@/hooks/useFetch';
import { Show as ShowType } from '@/types/Show';
import { useParams } from 'react-router-dom';
import { Loader2 } from "lucide-react";
import parse from 'html-react-parser';
import noImage from '/no-image.png';

function Show() {
  const { name: showName } = useParams();

  const { data, loading, error } = useFetch<ShowType>(`/singlesearch/shows?q=${showName?.replace(/_/g, '+')}`);

  if (error) {
    return (
      <section className='py-10'>
        <div className='container'>
          <NoResult text="Something went wrong." />
        </div>
      </section>
    )
  }

  if (loading || !data) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="h-16 w-16 animate-spin" />
      </div>
    );
  }

  const { image, name, genres, rating, url, status, summary, schedule } = data;

  return (
    <section className='py-10'>
      <div className='container'>
        <div className='flex flex-col gap-10 md:flex-row'>
          <img className="min-w-[200px] max-w-[100%] h-full min-h-[30vh] max-h-[70vh] object-cover" src={image ? image?.original : noImage} alt={name} />
          <div>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-2">
              {name}
            </h1>
            {rating.average && (
              <p className='flex items-center gap-2 mb-4'>
                <StarIcon />
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold mt-[1px]">
                  {rating.average}
                </code></p>
            )}
            {summary && <div className="leading-7 mb-1">{parse(summary)}</div>}
            <p className="leading-7 mb-4">Genres: <span className='font-semibold'>{genres.join(', ')}</span></p>
            <p className="leading-7 mb-4">Link:
              <a
                className='font-semibold break-words'
                href={url}
                target='blank'
              >
                {` ${url}`}
              </a>
            </p>
            <p className="leading-7 mb-4">Status: <span className='font-semibold'>{status}</span></p>
            <p className="leading-7 mb-4 flex gap-2">Schedule:
              <span className='font-semibold'>{schedule.days}</span>
              <span className='font-semibold'>{schedule.time}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Show;
