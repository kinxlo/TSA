'use client';

import { Box, Typography } from '@mui/material';
import { TsaButton, TsaNavbar } from '@tsa/ui';

export default function Home() {
  return (
    <>
      <TsaNavbar
        courses={['frontend', 'backend', 'full stack']}
        navLinks={['About Us', 'FAQs', 'Contact Us']}
      />
      <Box
        display={`flex`}
        flexDirection={`column`}
        justifyContent={`center`}
        alignItems={`center`}
        height={`100vh`}
      >
        <Typography
          sx={{ color: 'primary.main' }}
          variant={`h3`}
          fontWeight={`bold`}
        >
          TSA WEB APP
        </Typography>
        <TsaButton name={'Button'} />
      </Box>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo explicabo
        beatae itaque provident at, tenetur unde aspernatur magnam odio facilis
        molestias cum quae consequuntur veritatis doloremque adipisci qui
        nesciunt dolorem dolor necessitatibus, molestiae reiciendis quibusdam
        autem? Maiores esse numquam laudantium laborum quis, porro repellendus
        hic omnis dolor. Soluta, id vitae labore quasi minima nisi pariatur
        dignissimos quibusdam minus autem asperiores voluptate velit animi
        voluptas, quidem praesentium et libero, excepturi omnis at saepe
        voluptatum quas. Suscipit voluptas ex odit repellendus illo ducimus
        tempore officiis! Distinctio in, nobis dolor qui dolorem cupiditate
        nihil enim cum beatae aspernatur cumque asperiores voluptate delectus
        sit. Tenetur deleniti doloremque facere dicta, nesciunt expedita eum
        consequuntur, ratione possimus aliquam cum voluptas omnis ut alias?
        Saepe officia laboriosam ratione voluptas incidunt quae nulla tenetur
        libero maiores perspiciatis, nobis qui eos fugit, numquam ipsum autem
        recusandae ab ut dicta. Voluptas sapiente atque eaque expedita soluta
        exercitationem iste facere neque cum aspernatur cumque iusto corporis
        nobis ipsam natus eum blanditiis reiciendis esse quam optio, quidem
        temporibus magnam? Ad delectus qui cum beatae molestias modi pariatur,
        architecto autem, numquam enim dolore nesciunt in voluptate praesentium
        quod! Expedita, nisi. Quas facere at delectus provident? Neque tempora,
        voluptatem necessitatibus quia facere distinctio soluta mollitia error
        excepturi repellat est laudantium culpa. Quasi a officiis totam suscipit
        quod consequuntur facere, molestias modi, dolor ratione rerum id sit ex
        beatae expedita mollitia quia non laudantium cum repellendus doloremque?
        Rem corrupti, debitis quod ipsa distinctio totam earum deserunt placeat
        sapiente porro quam dicta veritatis repellat enim fugit quo atque
        nostrum nesciunt, consequuntur pariatur dolorum nisi? Consequuntur
        reprehenderit quisquam non, sed iste nostrum ut unde natus dicta ex
        sequi, iure earum quibusdam possimus commodi voluptatum ullam eius
        cumque? Nam ipsa ratione amet accusantium aperiam dignissimos eius velit
        beatae similique hic! Assumenda nesciunt reprehenderit suscipit ratione
        molestiae quam quae, ut blanditiis, odio fuga voluptatum laboriosam id
        alias facere eligendi sequi cumque unde in numquam sed vitae nihil vero
        possimus aut! Deserunt distinctio, quo animi eaque consequatur fugit ut
        amet architecto, vel iste esse deleniti hic nemo excepturi voluptatibus
        et expedita. Sequi autem, consectetur tenetur asperiores aut saepe
        voluptas soluta hic velit ipsam maiores fugiat delectus, consequatur
        voluptates repudiandae cumque numquam sunt! Cum, aliquam perspiciatis?
        Deleniti voluptas quaerat molestias facere reiciendis et similique
        molestiae tempore tempora ab? Natus sint aspernatur totam quod
        perferendis dignissimos, facere voluptatum, vel, labore recusandae quo?
        Pariatur fugiat ex doloribus ad! Minus velit porro ex ab suscipit
        repudiandae sit cum quia, pariatur eius alias, eveniet numquam a!
        Adipisci odit ducimus, quibusdam rem veniam molestiae atque! Earum velit
        ea quia dolores hic quisquam sunt, blanditiis, tenetur iste totam
        voluptates laborum explicabo placeat mollitia doloribus cupiditate
        exercitationem! Nobis dicta dolorum ut hic minima error consequatur, et
        eveniet non praesentium accusamus provident voluptate in vero at.
        Sapiente veniam quidem velit non, ad sint at illum iure perspiciatis
        nostrum corrupti hic ratione accusamus neque quia. Eius, temporibus non?
        Dignissimos temporibus optio blanditiis, sequi magni fugit facilis?
        Nulla dignissimos maxime et, iusto ipsam mollitia reprehenderit facilis
        aperiam, vero atque, tenetur quaerat?
      </p>
    </>
  );
}
