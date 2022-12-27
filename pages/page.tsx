import { useRouter } from "next/router"

 function Page() {
	const router = useRouter();
	const {input} = router.query;

	return (
		<>			
			<p>Hello: {input}</p>			
		</>
	)
}

export default Page;