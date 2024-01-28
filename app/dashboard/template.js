// import { getStaticProps } from "next/dist/build/templates/pages"

export default function DashboardTemplate({children}){
    return (
        <section>
            This is Dashboard Template
           {children}
        </section>
    )
}