import { useRouter } from "next/router"

 function Page() {
	const router = useRouter();
	const {iV} = router.query;

	return (
		<>			
			<p>Hello: {iV}</p>			
		</>
	)
}

export default Page;