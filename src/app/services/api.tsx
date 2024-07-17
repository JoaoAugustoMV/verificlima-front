import { PrevisaoDia } from "../models/previsaoDia";
import { PrevisaoFonte } from "../models/previsaoFonte";
import { PrevisaoPayload } from "../models/previsaoPayload";

const previsoesHoje: PrevisaoDia[] = [
    new PrevisaoDia(
        'DIA 06/02 - TER(Hoje)',
        'Hoje',
        [
          new PrevisaoFonte('Fonte1', 'https://fonte1.com', 15, 25),
          new PrevisaoFonte('Fonte2', 'https://fonte2.com', 14, 24),
        ]
      ),
      new PrevisaoDia(
        'DIA 06/02 - TER(Hoje)',
        '1 dia atrás',
        [
          new PrevisaoFonte('Fonte1', 'https://fonte1.com', 13, 23),
          new PrevisaoFonte('Fonte2', 'https://fonte2.com', 12, 22),
        ]
      ),
      new PrevisaoDia(
        'DIA 06/02 - TER(Hoje)',
        '3 dia atrás',
        [
          new PrevisaoFonte('Fonte1', 'https://fonte1.com', 13, 23),
          new PrevisaoFonte('Fonte2', 'https://fonte2.com', 12, 22),
        ]
      ),
      new PrevisaoDia(
        'DIA 06/02 - TER(Hoje)',
        '5 dia atrás',
        [
          new PrevisaoFonte('Fonte1', 'https://fonte1.com', 13, 23),
          new PrevisaoFonte('Fonte2', 'https://fonte2.com', 12, 22),
        ]
      )
]
const previsoesAmanha: PrevisaoDia[] = [
    new PrevisaoDia(
        'DIA 07/02 - QUA(Amanhã)',
        'Hoje',
        [
          new PrevisaoFonte('Fonte1', 'https://fonte1.com', 16, 26),
          new PrevisaoFonte('Fonte2', 'https://fonte2.com', 15, 25),
        ]
      ),
      new PrevisaoDia(
        'DIA 07/02 - QUA(Amanhã)',
        '1 dia atrás',
        [
          new PrevisaoFonte('Fonte1', 'https://fonte1.com', 14, 24),
          new PrevisaoFonte('Fonte2', 'https://fonte2.com', 13, 23),
        ]
      ),
      new PrevisaoDia(
        'DIA 07/02 - QUA(Amanhã)',
        '3 dia atrás',
        [
          new PrevisaoFonte('Fonte1', 'https://fonte1.com', 14, 24),
          new PrevisaoFonte('Fonte2', 'https://fonte2.com', 13, 23),
        ]
      ),
      new PrevisaoDia(
        'DIA 07/02 - QUA(Amanhã)',
        '3 dia atrás',
        [
          new PrevisaoFonte('Fonte1', 'https://fonte1.com', 14, 24),
          new PrevisaoFonte('Fonte2', 'https://fonte2.com', 13, 23),
        ]
      ),
]

const previsoesQuinta: PrevisaoDia[] = [
    new PrevisaoDia(
        'DIA 08/02 - QUI',
        'Hoje',
        [
          new PrevisaoFonte('Fonte1', 'https://fonte1.com', 17, 27),
          new PrevisaoFonte('Fonte2', 'https://fonte2.com', 16, 26),
        ]
      ),
      new PrevisaoDia(
        'DIA 08/02 - QUI',
        '1 dia atrás',
        [
          new PrevisaoFonte('Fonte1', 'https://fonte1.com', 15, 25),
          new PrevisaoFonte('Fonte2', 'https://fonte2.com', 14, 24),
        ]
      ),
      new PrevisaoDia(
        'DIA 08/02 - QUI',
        '3 dia atrás',
        [
          new PrevisaoFonte('Fonte1', 'https://fonte1.com', 15, 25),
          new PrevisaoFonte('Fonte2', 'https://fonte2.com', 14, 24),
        ]
      ),
      new PrevisaoDia(
        'DIA 08/02 - QUI',
        '5 dia atrás',
        [
          new PrevisaoFonte('Fonte1', 'https://fonte1.com', 15, 25),
          new PrevisaoFonte('Fonte2', 'https://fonte2.com', 14, 24),
        ]
      ),
] 


export const previsoesResponse = [
    new PrevisaoPayload('Hoje', previsoesHoje), 
    new PrevisaoPayload('Amanha', previsoesAmanha), 
    new PrevisaoPayload('Quinta', previsoesQuinta)]
