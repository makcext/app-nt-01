import { useRouter } from "next/router"

 function Page() {
	const router = useRouter();
	const {input} = router.query;

	function getter() {
		return(input);
		}

	return (
		<>			
			<p>Hello: {getter()}</p>			
		</>
	)
}

export default Page;