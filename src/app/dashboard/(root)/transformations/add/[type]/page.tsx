import Header from '@/components/shared/Header';
import TransformationForm from '@/components/shared/TransformationForm';
import { transformationTypes } from '@/data';
import { getUserById } from '@/lib/actions/user.actions';
import { auth } from '@clerk/nextjs';
import { Metadata, ResolvingMetadata } from 'next';
import { redirect } from 'next/navigation';

type Props = {
	params: { id: string };
	searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({
	params: { type },
}: SearchParamProps): Promise<Metadata> {
	return {
		title: transformationTypes[type].title,
	};
}
const AddTransformationTypePage = async ({
	params: { type },
}: SearchParamProps) => {
	const { userId } = auth();
	const transformation = transformationTypes[type];

	if (!userId) redirect('/sign-in');

	const user = await getUserById(userId);

	return (
		<>
			<Header title={transformation.title} subtitle={transformation.subTitle} />
			<section className='mt-10'>
				<TransformationForm
					action='Add'
					userId={user._id}
					type={transformation.type as TransformationTypeKey}
					creditBalance={user.creditBalance}
				/>
			</section>
		</>
	);
};

export default AddTransformationTypePage;
