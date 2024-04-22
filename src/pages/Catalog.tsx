import { useSearchParams } from "react-router-dom";
import useFetch from "@/hooks/useFetch";
import { ShowData } from "@/types/Show";
import { Loader2 } from "lucide-react"
import NoResult from "@/components/NoResult";
import CatalogList from "@/components/CatalogList";


function Catalog() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const { data, loading, error } = useFetch<ShowData[]>(`/search/shows?q=${query}`);

  console.log('data: ', data)


  if (error) {
    return (
      <section className='py-10'>
        <div className='container'>
          <NoResult text="Something went wrong." />
        </div>
      </section>
    )
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="h-16 w-16 animate-spin" />
      </div>
    )
  }

  return (
    <section className="py-10">
      <div className="container">
        {data?.length ? <CatalogList list={data} /> : <NoResult text="Sorry, nothing found with this search" />}
      </div>
    </section>
  )
}

export default Catalog;
