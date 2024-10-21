export const clientsFakes = [
  {
    id: 'e07a2185-128b-4c2e-9ef1-72370110a468',
    client_number: '7204076116',
    full_name: 'Jose Mesaly Fonseca de Carvalho',
    hash_password:
      '$2a$06$08SVEbA0FWjDTW65SLCNnO/wQ0uD1guW8w69MJI9MFN3jUSksB246',
    email: 'jose_mesaly@example.com',
    role: 'USER',
    address: {
      street: 'Rua Raul Correa',
      number: '547',
      complement: 'FD',
      neighborhood: 'Montes Claros',
      zip_code: '39401-029',
      city: 'Montes Claros',
      state: 'MG',
    },
    tax_id: '99.015.634/0001-85',
    state_registration: '2345678901',
    invoices: [
      {
        id: '2c5e43b5-9805-4022-bd74-033fcc59ca57',
        file_name: '3001116735-01-2024.pdf',
        reference_month: 'JAN/2024',
        due_date: '2024-12-02T03:00:00.000Z',
        installation_number: '3001116735',
        amount_due: 107.38,
        billed_items: [
          {
            id: '3f2b06c0-33fc-4dbe-b524-cbec75aed87a',
            item_name: 'Energia Elétrica',
            unit: 'kWh',
            quantity: 50,
            unit_price: 0.95543124,
            amount: 47.75,
            unit_rate: 0.74906,
          },
          {
            id: 'fc54d904-754c-4bfa-882c-ab0afb2de444',
            item_name: 'Energia SCEE s/ ICMS',
            unit: 'kWh',
            quantity: 456,
            unit_price: 0.5097061,
            amount: 232.42,
            unit_rate: 0.48733,
          },
          {
            id: '12ee9049-c7c1-4151-ad61-e813441f110d',
            item_name: 'Energia compensada GD I',
            unit: 'kWh',
            quantity: 456,
            unit_price: 0.48733,
            amount: -222.22,
            unit_rate: 0.48733,
          },
          {
            id: 'd266ad80-43f5-4187-aeb4-209f09499ef0',
            item_name: 'Contrib Ilum Publica Municipal',
            unit: '',
            quantity: 0,
            unit_price: 0,
            amount: 49.43,
            unit_rate: 0,
          },
        ],
        consumption_history: [
          {
            id: '4ae6c07a-7d8a-4891-bc35-d066614c4641',
            month_year: 'JAN/24',
            consumption_kwh: 506,
            average_kwh_per_day: 16.86,
            days: 30,
          },
          {
            id: 'de92953f-1386-4058-b07c-a0af4a4a2082',
            month_year: 'DEZ/23',
            consumption_kwh: 606,
            average_kwh_per_day: 18.93,
            days: 32,
          },
          {
            id: 'b01684c6-ab4e-4ac5-ae33-c471a6e675a6',
            month_year: 'NOV/23',
            consumption_kwh: 481,
            average_kwh_per_day: 16.03,
            days: 30,
          },
          {
            id: 'ad96979a-a508-4448-991b-02ae35c2f777',
            month_year: 'OUT/23',
            consumption_kwh: 517,
            average_kwh_per_day: 17.23,
            days: 30,
          },
          {
            id: '5c6b0131-dfd5-447b-8ed7-ac4b5b40074c',
            month_year: 'SET/23',
            consumption_kwh: 493,
            average_kwh_per_day: 15.4,
            days: 32,
          },
          {
            id: 'ad503e60-3f9c-466b-a30c-c53a623240fc',
            month_year: 'AGO/23',
            consumption_kwh: 455,
            average_kwh_per_day: 15.16,
            days: 30,
          },
          {
            id: 'eb6c26c0-fca1-4b78-b866-d0d6aa6408f5',
            month_year: 'JUL/23',
            consumption_kwh: 419,
            average_kwh_per_day: 13.09,
            days: 32,
          },
          {
            id: 'b74f2394-ceda-40ce-a524-678c00c86867',
            month_year: 'JUN/23',
            consumption_kwh: 509,
            average_kwh_per_day: 16.96,
            days: 30,
          },
          {
            id: '586bad98-00ea-4c32-90d8-b5a01824ecb4',
            month_year: 'MAI/23',
            consumption_kwh: 522,
            average_kwh_per_day: 17.4,
            days: 30,
          },
          {
            id: '85a717ce-7091-406e-ae7a-19b51f82fab4',
            month_year: 'ABR/23',
            consumption_kwh: 274,
            average_kwh_per_day: 8.56,
            days: 32,
          },
          {
            id: 'c99b8678-2ed4-467a-812e-16390ec2c9e8',
            month_year: 'MAR/23',
            consumption_kwh: 571,
            average_kwh_per_day: 18.41,
            days: 31,
          },
          {
            id: '84c1489c-7f30-4293-8dcf-f8d21ee5d5a3',
            month_year: 'FEV/23',
            consumption_kwh: 472,
            average_kwh_per_day: 16.85,
            days: 28,
          },
          {
            id: '40febf32-8029-46de-92a5-fb379fe32eed',
            month_year: 'JAN/23',
            consumption_kwh: 509,
            average_kwh_per_day: 16.41,
            days: 31,
          },
        ],
      },
      {
        id: 'ea53998c-1df2-407e-9c57-1f0dccdf84cd',
        file_name: '3001116735-02-2024.pdf',
        reference_month: 'FEV/2024',
        due_date: '2024-05-03T03:00:00.000Z',
        installation_number: '3001116735',
        amount_due: 95.63,
        billed_items: [
          {
            id: 'd55854e5-c60b-4544-b16e-cf1b77ec5659',
            item_name: 'Energia Elétrica',
            unit: 'kWh',
            quantity: 50,
            unit_price: 0.96136372,
            amount: 48.06,
            unit_rate: 0.74906,
          },
          {
            id: 'e662b9fd-75f0-4303-98cc-63c18222a0c8',
            item_name: 'Energia SCEE s/ ICMS',
            unit: 'kWh',
            quantity: 250,
            unit_price: 0.51287097,
            amount: 128.21,
            unit_rate: 0.48733,
          },
          {
            id: 'd413b9d1-8564-4ebf-a6b2-3ec12966ecbc',
            item_name: 'Energia compensada GD I',
            unit: 'kWh',
            quantity: 250,
            unit_price: 0.48733,
            amount: -121.83,
            unit_rate: 0.48733,
          },
          {
            id: '5830ed7f-2dae-464b-b0ee-71ca3301a816',
            item_name: 'Contrib Ilum Publica Municipal',
            unit: '',
            quantity: 0,
            unit_price: 0,
            amount: 41.19,
            unit_rate: 0,
          },
        ],
        consumption_history: [
          {
            id: '0b30fe5d-a2ed-403f-b4ec-37e932402ecf',
            month_year: 'FEV/24',
            consumption_kwh: 300,
            average_kwh_per_day: 10.71,
            days: 28,
          },
          {
            id: '2521b6eb-41bb-481f-80f3-c8bcf6a3b32a',
            month_year: 'JAN/24',
            consumption_kwh: 506,
            average_kwh_per_day: 16.86,
            days: 30,
          },
          {
            id: 'a3d2bb2c-5903-4b6d-94c0-10b97bdb170d',
            month_year: 'DEZ/23',
            consumption_kwh: 606,
            average_kwh_per_day: 18.93,
            days: 32,
          },
          {
            id: 'e012f272-3ebe-4db0-bc37-cf64b0750740',
            month_year: 'NOV/23',
            consumption_kwh: 481,
            average_kwh_per_day: 16.03,
            days: 30,
          },
          {
            id: 'a32eeed0-d6f7-4cec-9d7b-478f06c4dd8e',
            month_year: 'OUT/23',
            consumption_kwh: 517,
            average_kwh_per_day: 17.23,
            days: 30,
          },
          {
            id: '2a5f5dd4-db47-4f27-a38f-a62dbef9386e',
            month_year: 'SET/23',
            consumption_kwh: 493,
            average_kwh_per_day: 15.4,
            days: 32,
          },
          {
            id: 'a2e3154e-64e4-4c82-81e4-3b055dec756a',
            month_year: 'AGO/23',
            consumption_kwh: 455,
            average_kwh_per_day: 15.16,
            days: 30,
          },
          {
            id: 'aa0629c4-eb65-48aa-8eb1-d53ea5aad297',
            month_year: 'JUL/23',
            consumption_kwh: 419,
            average_kwh_per_day: 13.09,
            days: 32,
          },
          {
            id: '8433e124-1328-489b-835f-a1dbb4819873',
            month_year: 'JUN/23',
            consumption_kwh: 509,
            average_kwh_per_day: 16.96,
            days: 30,
          },
          {
            id: '6a8176f9-0f07-40d6-81dd-61627480a195',
            month_year: 'MAI/23',
            consumption_kwh: 522,
            average_kwh_per_day: 17.4,
            days: 30,
          },
          {
            id: 'be8305a7-a85b-4b8a-a55a-0242f571fd0a',
            month_year: 'ABR/23',
            consumption_kwh: 274,
            average_kwh_per_day: 8.56,
            days: 32,
          },
          {
            id: 'd4cc3ddb-0ef4-4210-93b3-c7b450cc2fdc',
            month_year: 'MAR/23',
            consumption_kwh: 571,
            average_kwh_per_day: 18.41,
            days: 31,
          },
          {
            id: '55112917-1cc3-4001-a8df-53149ffb94a4',
            month_year: 'FEV/23',
            consumption_kwh: 472,
            average_kwh_per_day: 16.85,
            days: 28,
          },
        ],
      },
      {
        id: '39049e38-559d-47bd-a5ab-8d32b4518b39',
        file_name: '3001422762-02-2024.pdf',
        reference_month: 'FEV/2024',
        due_date: '2024-09-03T03:00:00.000Z',
        installation_number: '3001422762',
        amount_due: 186.11,
        billed_items: [
          {
            id: '842ec9cf-2ecf-427c-8047-88455ddcdb91',
            item_name: 'Energia Elétrica',
            unit: 'kWh',
            quantity: 100,
            unit_price: 0.96136372,
            amount: 96.12,
            unit_rate: 0.74906,
          },
          {
            id: 'b12d6274-03c8-4f36-9c51-9f3c274ad877',
            item_name: 'Energia SCEE s/ ICMS',
            unit: 'kWh',
            quantity: 1940,
            unit_price: 0.51287097,
            amount: 994.96,
            unit_rate: 0.48733,
          },
          {
            id: '01a8b19e-f6e9-4cec-b444-c60c4ca541c3',
            item_name: 'Energia compensada GD I',
            unit: 'kWh',
            quantity: 1940,
            unit_price: 0.48733,
            amount: -945.42,
            unit_rate: 0.48733,
          },
          {
            id: 'bd736299-0296-43ea-850b-76de60e3cfe1',
            item_name: 'Contrib Ilum Publica Municipal',
            unit: '',
            quantity: 0,
            unit_price: 0,
            amount: 40.45,
            unit_rate: 0,
          },
        ],
        consumption_history: [
          {
            id: '48ddea80-a888-4fbb-9c9d-af0014c029dd',
            month_year: 'FEV/24',
            consumption_kwh: 2040,
            average_kwh_per_day: 68,
            days: 30,
          },
          {
            id: '20ae3892-4129-4e35-bdc8-0011396f9a08',
            month_year: 'JAN/24',
            consumption_kwh: 2400,
            average_kwh_per_day: 72.72,
            days: 33,
          },
          {
            id: '571bdd8c-acc6-4a43-8994-42ae56eb6c5b',
            month_year: 'DEZ/23',
            consumption_kwh: 2280,
            average_kwh_per_day: 81.42,
            days: 28,
          },
          {
            id: '4d8188a5-2102-4618-8bac-74a1a455f45c',
            month_year: 'NOV/23',
            consumption_kwh: 2360,
            average_kwh_per_day: 78.66,
            days: 30,
          },
          {
            id: 'f2bcd684-3294-4532-9f3e-0e1094e129f5',
            month_year: 'OUT/23',
            consumption_kwh: 2880,
            average_kwh_per_day: 87.27,
            days: 33,
          },
          {
            id: '048f6d88-026f-43c5-b33a-03a409ef7791',
            month_year: 'SET/23',
            consumption_kwh: 1520,
            average_kwh_per_day: 52.41,
            days: 29,
          },
          {
            id: '154f3c17-b0bb-4998-b4b0-30d6d6ee6d7e',
            month_year: 'AGO/23',
            consumption_kwh: 1520,
            average_kwh_per_day: 46.06,
            days: 33,
          },
          {
            id: '68b4d3d5-ea64-4c93-9ee0-1f0192a16a4e',
            month_year: 'JUL/23',
            consumption_kwh: 320,
            average_kwh_per_day: 21.33,
            days: 15,
          },
          {
            id: '1c34e51b-b627-4533-8aba-9f9649a17235',
            month_year: 'JUN/23',
            consumption_kwh: 0,
            average_kwh_per_day: 0,
            days: 0,
          },
          {
            id: '83d5c2e6-95fb-4a3e-a815-85ed8bff7327',
            month_year: 'MAI/23',
            consumption_kwh: 0,
            average_kwh_per_day: 0,
            days: 0,
          },
          {
            id: '3d6566a1-4719-43e8-b901-b94b98f231ea',
            month_year: 'ABR/23',
            consumption_kwh: 0,
            average_kwh_per_day: 0,
            days: 0,
          },
          {
            id: '0bbbd15f-d771-4692-a4ce-203164fa7272',
            month_year: 'MAR/23',
            consumption_kwh: 0,
            average_kwh_per_day: 0,
            days: 0,
          },
          {
            id: 'b54788a1-f80e-4318-8508-eaef82596abe',
            month_year: 'FEV/23',
            consumption_kwh: 0,
            average_kwh_per_day: 0,
            days: 0,
          },
        ],
      },
    ],
  },
  {
    id: '9847f34c-76d1-4b29-88ca-2cb9ff937f41',
    client_number: '7202210726',
    full_name: 'Selfway Treinamento Personalizado LTDA',
    hash_password:
      '$2a$06$H3RrsnqWtItxw7kVRpIPZOmel3SGP/wOMgJdDadQdc6ZK1Uc3Bbo.',
    email: 'selfway@example.com',
    role: 'USER',
    address: {
      street: 'Avenida Bandeirantes',
      number: '1586',
      complement: 'CS',
      neighborhood: 'Belo Horizonte',
      zip_code: '30315-032',
      city: 'Belo Horizonte',
      state: 'MG',
    },
    tax_id: '99.015.634/0001-85',
    state_registration: '2345678901',
    invoices: [
      {
        id: '1f1c2f91-aa94-4d0c-b0e6-a3c72da51819',
        file_name: '3001422762-01-2024.pdf',
        reference_month: 'JAN/2024',
        due_date: '2024-09-02T03:00:00.000Z',
        installation_number: '3001422762',
        amount_due: 66.62,
        billed_items: [
          {
            id: '08bc5aea-ea31-4e51-912c-9bbdc8122e4a',
            item_name: 'Energia Elétrica',
            unit: 'kWh',
            quantity: 100,
            unit_price: 0.95543124,
            amount: 95.52,
            unit_rate: 0.74906,
          },
          {
            id: '05b0d38d-9370-43a6-92dd-5d2b6f801882',
            item_name: 'Energia SCEE s/ ICMS',
            unit: 'kWh',
            quantity: 2300,
            unit_price: 0.5097061,
            amount: 1172.31,
            unit_rate: 0.48733,
          },
          {
            id: '7bb67b83-eb0c-4b9c-a334-0f54e0571fd0',
            item_name: 'Energia compensada GD I',
            unit: 'kWh',
            quantity: 2300,
            unit_price: 0.48733,
            amount: -1120.85,
            unit_rate: 0.48733,
          },
          {
            id: '8b96506e-3804-4cf7-808e-81350b7a1c08',
            item_name: 'Contrib Ilum Publica Municipal',
            unit: '',
            quantity: 0,
            unit_price: 0,
            amount: 40.45,
            unit_rate: 0,
          },
          {
            id: 'e80bd1d9-820a-4ace-b62a-a30ed6848a75',
            item_name: 'Ressarcimento de Danos',
            unit: '',
            quantity: 0,
            unit_price: 0,
            amount: -120.81,
            unit_rate: 0,
          },
        ],
        consumption_history: [
          {
            id: 'fcfad8eb-7e63-4b38-abad-930d20b09182',
            month_year: 'JAN/24',
            consumption_kwh: 2400,
            average_kwh_per_day: 72.72,
            days: 33,
          },
          {
            id: '9a811b2c-ebb8-4467-80f5-57c689fdcf1b',
            month_year: 'DEZ/23',
            consumption_kwh: 2280,
            average_kwh_per_day: 81.42,
            days: 28,
          },
          {
            id: 'a4856db9-b040-45b4-b811-9d8b3dd63182',
            month_year: 'NOV/23',
            consumption_kwh: 2360,
            average_kwh_per_day: 78.66,
            days: 30,
          },
          {
            id: '550808ed-0162-49cd-95a6-2390231be520',
            month_year: 'OUT/23',
            consumption_kwh: 2880,
            average_kwh_per_day: 87.27,
            days: 33,
          },
          {
            id: 'e75f2fe2-0dde-4eb2-a17e-5b2b36787529',
            month_year: 'SET/23',
            consumption_kwh: 1520,
            average_kwh_per_day: 52.41,
            days: 29,
          },
          {
            id: 'eecfda35-914a-47ca-ab4d-d01ced7d3144',
            month_year: 'AGO/23',
            consumption_kwh: 1520,
            average_kwh_per_day: 46.06,
            days: 33,
          },
          {
            id: '089dcff0-cb2a-448f-be1e-a7bb86b25f4c',
            month_year: 'JUL/23',
            consumption_kwh: 320,
            average_kwh_per_day: 21.33,
            days: 15,
          },
          {
            id: '4eca8cbb-3c58-48c7-b0f0-22e1b81531f2',
            month_year: 'JUN/23',
            consumption_kwh: 0,
            average_kwh_per_day: 0,
            days: 0,
          },
          {
            id: '4859de63-65b1-4afa-a46d-2b95b5cd09b6',
            month_year: 'MAI/23',
            consumption_kwh: 0,
            average_kwh_per_day: 0,
            days: 0,
          },
          {
            id: '977e3e5d-1edd-436f-96a6-ac05269f2cc1',
            month_year: 'ABR/23',
            consumption_kwh: 0,
            average_kwh_per_day: 0,
            days: 0,
          },
          {
            id: '62e4a6dc-73df-494e-9457-fdbcc44664c9',
            month_year: 'MAR/23',
            consumption_kwh: 0,
            average_kwh_per_day: 0,
            days: 0,
          },
          {
            id: 'd09a4f64-01c7-4c78-b589-8a8117eb15f5',
            month_year: 'FEV/23',
            consumption_kwh: 0,
            average_kwh_per_day: 0,
            days: 0,
          },
          {
            id: '23c8f535-b825-4035-976b-745bbbe4e3f3',
            month_year: 'JAN/23',
            consumption_kwh: 0,
            average_kwh_per_day: 0,
            days: 0,
          },
        ],
      },
      {
        id: '39049e38-559d-47bd-a5ab-8d32b4518b39',
        file_name: '3001422762-02-2024.pdf',
        reference_month: 'FEV/2024',
        due_date: '2024-09-03T03:00:00.000Z',
        installation_number: '3001422762',
        amount_due: 186.11,
        billed_items: [
          {
            id: '842ec9cf-2ecf-427c-8047-88455ddcdb91',
            item_name: 'Energia Elétrica',
            unit: 'kWh',
            quantity: 100,
            unit_price: 0.96136372,
            amount: 96.12,
            unit_rate: 0.74906,
          },
          {
            id: 'b12d6274-03c8-4f36-9c51-9f3c274ad877',
            item_name: 'Energia SCEE s/ ICMS',
            unit: 'kWh',
            quantity: 1940,
            unit_price: 0.51287097,
            amount: 994.96,
            unit_rate: 0.48733,
          },
          {
            id: '01a8b19e-f6e9-4cec-b444-c60c4ca541c3',
            item_name: 'Energia compensada GD I',
            unit: 'kWh',
            quantity: 1940,
            unit_price: 0.48733,
            amount: -945.42,
            unit_rate: 0.48733,
          },
          {
            id: 'bd736299-0296-43ea-850b-76de60e3cfe1',
            item_name: 'Contrib Ilum Publica Municipal',
            unit: '',
            quantity: 0,
            unit_price: 0,
            amount: 40.45,
            unit_rate: 0,
          },
        ],
        consumption_history: [
          {
            id: '48ddea80-a888-4fbb-9c9d-af0014c029dd',
            month_year: 'FEV/24',
            consumption_kwh: 2040,
            average_kwh_per_day: 68,
            days: 30,
          },
          {
            id: '20ae3892-4129-4e35-bdc8-0011396f9a08',
            month_year: 'JAN/24',
            consumption_kwh: 2400,
            average_kwh_per_day: 72.72,
            days: 33,
          },
          {
            id: '571bdd8c-acc6-4a43-8994-42ae56eb6c5b',
            month_year: 'DEZ/23',
            consumption_kwh: 2280,
            average_kwh_per_day: 81.42,
            days: 28,
          },
          {
            id: '4d8188a5-2102-4618-8bac-74a1a455f45c',
            month_year: 'NOV/23',
            consumption_kwh: 2360,
            average_kwh_per_day: 78.66,
            days: 30,
          },
          {
            id: 'f2bcd684-3294-4532-9f3e-0e1094e129f5',
            month_year: 'OUT/23',
            consumption_kwh: 2880,
            average_kwh_per_day: 87.27,
            days: 33,
          },
          {
            id: '048f6d88-026f-43c5-b33a-03a409ef7791',
            month_year: 'SET/23',
            consumption_kwh: 1520,
            average_kwh_per_day: 52.41,
            days: 29,
          },
          {
            id: '154f3c17-b0bb-4998-b4b0-30d6d6ee6d7e',
            month_year: 'AGO/23',
            consumption_kwh: 1520,
            average_kwh_per_day: 46.06,
            days: 33,
          },
          {
            id: '68b4d3d5-ea64-4c93-9ee0-1f0192a16a4e',
            month_year: 'JUL/23',
            consumption_kwh: 320,
            average_kwh_per_day: 21.33,
            days: 15,
          },
          {
            id: '1c34e51b-b627-4533-8aba-9f9649a17235',
            month_year: 'JUN/23',
            consumption_kwh: 0,
            average_kwh_per_day: 0,
            days: 0,
          },
          {
            id: '83d5c2e6-95fb-4a3e-a815-85ed8bff7327',
            month_year: 'MAI/23',
            consumption_kwh: 0,
            average_kwh_per_day: 0,
            days: 0,
          },
          {
            id: '3d6566a1-4719-43e8-b901-b94b98f231ea',
            month_year: 'ABR/23',
            consumption_kwh: 0,
            average_kwh_per_day: 0,
            days: 0,
          },
          {
            id: '0bbbd15f-d771-4692-a4ce-203164fa7272',
            month_year: 'MAR/23',
            consumption_kwh: 0,
            average_kwh_per_day: 0,
            days: 0,
          },
          {
            id: 'b54788a1-f80e-4318-8508-eaef82596abe',
            month_year: 'FEV/23',
            consumption_kwh: 0,
            average_kwh_per_day: 0,
            days: 0,
          },
        ],
      },
    ],
  },
]
