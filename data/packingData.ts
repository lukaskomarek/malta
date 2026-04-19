import { PackingItem } from '@/types'

export const defaultPackingItems: PackingItem[] = [
  // Oblečení
  { id: 'ob1', label: 'Trička (7×)', category: 'obleceni', assignedTo: ['lukas'], checked: false },
  { id: 'ob2', label: 'Šortky (5×)', category: 'obleceni', assignedTo: ['lukas'], checked: false },
  { id: 'ob3', label: 'Plavky', category: 'obleceni', assignedTo: ['lukas'], checked: false },
  { id: 'ob4', label: 'Lehká košile (večer)', category: 'obleceni', assignedTo: ['lukas'], checked: false },
  { id: 'ob5', label: 'Kalhoty (1×)', category: 'obleceni', assignedTo: ['lukas'], checked: false },
  { id: 'ob6', label: 'Trička (7×)', category: 'obleceni', assignedTo: ['petra'], checked: false },
  { id: 'ob7', label: 'Šaty / sukně (3×)', category: 'obleceni', assignedTo: ['petra'], checked: false },
  { id: 'ob8', label: 'Plavky (2×)', category: 'obleceni', assignedTo: ['petra'], checked: false },
  { id: 'ob9', label: 'Kardigan / přehoz', category: 'obleceni', assignedTo: ['petra'], checked: false },
  { id: 'ob10', label: 'Kalhoty / legíny', category: 'obleceni', assignedTo: ['petra'], checked: false },
  { id: 'ob11', label: 'Spodní prádlo (7×)', category: 'obleceni', assignedTo: ['lukas'], checked: false },
  { id: 'ob12', label: 'Spodní prádlo (7×)', category: 'obleceni', assignedTo: ['petra'], checked: false },
  { id: 'ob13', label: 'Ponožky (7×)', category: 'obleceni', assignedTo: ['lukas'], checked: false },
  { id: 'ob14', label: 'Ponožky (7×)', category: 'obleceni', assignedTo: ['petra'], checked: false },
  { id: 'ob15', label: 'Pyžamo', category: 'obleceni', assignedTo: ['lukas', 'petra'], checked: false },
  { id: 'ob16', label: 'Boty (tenisky + sandály)', category: 'obleceni', assignedTo: ['lukas'], checked: false },
  { id: 'ob17', label: 'Boty (tenisky + sandály)', category: 'obleceni', assignedTo: ['petra'], checked: false },
  { id: 'ob18', label: 'Plážové pantofle', category: 'obleceni', assignedTo: ['lukas', 'petra'], checked: false },
  // Oblečení — děti
  { id: 'ob19', label: 'Trička (7× každé)', category: 'obleceni', assignedTo: ['deti'], checked: false },
  { id: 'ob20', label: 'Šortky / sukně (5× každé)', category: 'obleceni', assignedTo: ['deti'], checked: false },
  { id: 'ob21', label: 'Plavky (2× každé)', category: 'obleceni', assignedTo: ['deti'], checked: false },
  { id: 'ob22', label: 'Spodní prádlo + ponožky', category: 'obleceni', assignedTo: ['deti'], checked: false },
  { id: 'ob23', label: 'Pyžamo', category: 'obleceni', assignedTo: ['deti'], checked: false },
  { id: 'ob24', label: 'Boty + sandály', category: 'obleceni', assignedTo: ['deti'], checked: false },

  // Pláž & moře
  { id: 'pl1', label: 'Osuška plážová (2×)', category: 'plaz', assignedTo: ['lukas', 'petra'], checked: false },
  { id: 'pl2', label: 'Osuška plážová (2× děti)', category: 'plaz', assignedTo: ['deti'], checked: false },
  { id: 'pl3', label: 'Opalovací krém SPF50+', category: 'plaz', assignedTo: ['all'], checked: false },
  { id: 'pl4', label: 'Opalovací krém pro děti SPF50+', category: 'plaz', assignedTo: ['deti'], checked: false },
  { id: 'pl5', label: 'Brýle sluneční', category: 'plaz', assignedTo: ['lukas'], checked: false },
  { id: 'pl6', label: 'Brýle sluneční', category: 'plaz', assignedTo: ['petra'], checked: false },
  { id: 'pl7', label: 'Brýle sluneční (děti)', category: 'plaz', assignedTo: ['deti'], checked: false },
  { id: 'pl8', label: 'Klobouk / kšiltovka', category: 'plaz', assignedTo: ['all'], checked: false },
  { id: 'pl9', label: 'Nafukovací věci / plávací pomůcky', category: 'plaz', assignedTo: ['deti'], checked: false },
  { id: 'pl10', label: 'Potápěčské brýle', category: 'plaz', assignedTo: ['lukas', 'deti'], checked: false },
  { id: 'pl11', label: 'Plážová taška', category: 'plaz', assignedTo: ['all'], checked: false },

  // Zdraví
  { id: 'zd1', label: 'Ibuprofen / Paralen', category: 'zdravi', assignedTo: ['all'], checked: false },
  { id: 'zd2', label: 'Náplasti', category: 'zdravi', assignedTo: ['all'], checked: false },
  { id: 'zd3', label: 'Přípravek na průjem', category: 'zdravi', assignedTo: ['all'], checked: false },
  { id: 'zd4', label: 'Repelent', category: 'zdravi', assignedTo: ['all'], checked: false },
  { id: 'zd5', label: 'Přípravek po opalování (Aloe Vera)', category: 'zdravi', assignedTo: ['all'], checked: false },
  { id: 'zd6', label: 'EHIC karty (EU pojištění)', category: 'zdravi', assignedTo: ['all'], checked: false },
  { id: 'zd7', label: 'Pravidelné léky', note: 'pokud někdo bere', category: 'zdravi', assignedTo: ['all'], checked: false },
  { id: 'zd8', label: 'Dezinfekce', category: 'zdravi', assignedTo: ['all'], checked: false },

  // Elektronika
  { id: 'el1', label: 'Telefon + nabíječka', category: 'elektronika', assignedTo: ['lukas'], checked: false },
  { id: 'el2', label: 'Telefon + nabíječka', category: 'elektronika', assignedTo: ['petra'], checked: false },
  { id: 'el3', label: 'Adaptér typ G (britský)', note: 'nutný!', category: 'elektronika', assignedTo: ['all'], checked: false },
  { id: 'el4', label: 'Powerbank', category: 'elektronika', assignedTo: ['lukas'], checked: false },
  { id: 'el5', label: 'Tablet (děti)', category: 'elektronika', assignedTo: ['deti'], checked: false },
  { id: 'el6', label: 'Sluchátka', category: 'elektronika', assignedTo: ['lukas', 'petra'], checked: false },
  { id: 'el7', label: 'Kabel USB-C', category: 'elektronika', assignedTo: ['all'], checked: false },
  { id: 'el8', label: 'Kamera / GoPro', category: 'elektronika', assignedTo: ['lukas'], checked: false },

  // Hygiena
  { id: 'hy1', label: 'Zubní kartáček + pasta', category: 'hygiena', assignedTo: ['lukas', 'petra'], checked: false },
  { id: 'hy2', label: 'Zubní kartáček + pasta (děti)', category: 'hygiena', assignedTo: ['deti'], checked: false },
  { id: 'hy3', label: 'Šampon + kondicionér', category: 'hygiena', assignedTo: ['petra'], checked: false },
  { id: 'hy4', label: 'Sprchový gel', category: 'hygiena', assignedTo: ['all'], checked: false },
  { id: 'hy5', label: 'Deodorant', category: 'hygiena', assignedTo: ['lukas', 'petra'], checked: false },
  { id: 'hy6', label: 'Holicí strojek', category: 'hygiena', assignedTo: ['lukas'], checked: false },
  { id: 'hy7', label: 'Kosmetická taška', category: 'hygiena', assignedTo: ['petra'], checked: false },
  { id: 'hy8', label: 'Vlhčené ubrousky', category: 'hygiena', assignedTo: ['deti'], checked: false },

  // Doklady
  { id: 'do1', label: 'Cestovní pas', category: 'doklady', assignedTo: ['lukas'], checked: false },
  { id: 'do2', label: 'Cestovní pas', category: 'doklady', assignedTo: ['petra'], checked: false },
  { id: 'do3', label: 'Cestovní pasy (děti)', category: 'doklady', assignedTo: ['deti'], checked: false },
  { id: 'do4', label: 'Palubní vstupenky (vytištěné nebo v telefonu)', category: 'doklady', assignedTo: ['lukas', 'petra'], checked: false },
  { id: 'do5', label: 'Potvrzení Airbnb', category: 'doklady', assignedTo: ['lukas'], checked: false },
  { id: 'do6', label: 'Hotovost EUR', category: 'doklady', assignedTo: ['lukas', 'petra'], checked: false },
  { id: 'do7', label: 'Platební karta', category: 'doklady', assignedTo: ['lukas', 'petra'], checked: false },
  { id: 'do8', label: 'Cestovní pojištění', category: 'doklady', assignedTo: ['all'], checked: false },

  // Pro děti
  { id: 'de1', label: 'Knížky / komiksy', category: 'deti', assignedTo: ['deti'], checked: false },
  { id: 'de2', label: 'Kartičkové hry', category: 'deti', assignedTo: ['deti'], checked: false },
  { id: 'de3', label: 'Krabice na přírodniny / škeble', category: 'deti', assignedTo: ['deti'], checked: false },
  { id: 'de4', label: 'Vybarvovánky / blok + tužky', category: 'deti', assignedTo: ['deti'], checked: false },
  { id: 'de5', label: 'Oblíbená hračka', category: 'deti', assignedTo: ['deti'], checked: false },
  { id: 'de6', label: 'Bedminton / míček na pláž', category: 'deti', assignedTo: ['deti'], checked: false },

  // Do apartmánu
  { id: 'ap1', label: 'Malá cestovní lékárnička', category: 'apartman', assignedTo: ['all'], checked: false },
  { id: 'ap2', label: 'Sáčky na odpadky', category: 'apartman', assignedTo: ['all'], checked: false },
  { id: 'ap3', label: 'Párátka / nůžky / šroubovák', category: 'apartman', assignedTo: ['lukas'], checked: false },
  { id: 'ap4', label: 'Ziplock sáčky (pláž / mokré věci)', category: 'apartman', assignedTo: ['all'], checked: false },
  { id: 'ap5', label: 'Malý multiprodlužovák', note: 'britská zástrčka nebo s adaptérem', category: 'apartman', assignedTo: ['lukas'], checked: false },
  { id: 'ap6', label: 'Nákupní taška skládací', category: 'apartman', assignedTo: ['petra'], checked: false },
]
