import { PackingItem } from '@/types'

export const defaultPackingItems: PackingItem[] = [

  // ── OBLEČENÍ — osobní pro každého ──────────────────────────────────────

  // Lukáš
  { id: 'ob-l-1', label: 'Trička', category: 'obleceni', assignedTo: ['lukas'], checked: false },
  { id: 'ob-l-2', label: 'Šortky', category: 'obleceni', assignedTo: ['lukas'], checked: false },
  { id: 'ob-l-3', label: 'Plavky', category: 'obleceni', assignedTo: ['lukas'], checked: false },
  { id: 'ob-l-4', label: 'Košile (na večer)', category: 'obleceni', assignedTo: ['lukas'], checked: false },
  { id: 'ob-l-5', label: 'Kalhoty', category: 'obleceni', assignedTo: ['lukas'], checked: false },
  { id: 'ob-l-6', label: 'Spodní prádlo', category: 'obleceni', assignedTo: ['lukas'], checked: false },
  { id: 'ob-l-7', label: 'Ponožky', category: 'obleceni', assignedTo: ['lukas'], checked: false },
  { id: 'ob-l-8', label: 'Pyžamo', category: 'obleceni', assignedTo: ['lukas'], checked: false },
  { id: 'ob-l-9', label: 'Tenisky', category: 'obleceni', assignedTo: ['lukas'], checked: false },
  { id: 'ob-l-10', label: 'Sandály', category: 'obleceni', assignedTo: ['lukas'], checked: false },
  { id: 'ob-l-11', label: 'Plážové pantofle', category: 'obleceni', assignedTo: ['lukas'], checked: false },

  // Petra
  { id: 'ob-p-1', label: 'Trička', category: 'obleceni', assignedTo: ['petra'], checked: false },
  { id: 'ob-p-2', label: 'Šaty / sukně', category: 'obleceni', assignedTo: ['petra'], checked: false },
  { id: 'ob-p-3', label: 'Plavky', category: 'obleceni', assignedTo: ['petra'], checked: false },
  { id: 'ob-p-4', label: 'Kardigan / přehoz', category: 'obleceni', assignedTo: ['petra'], checked: false },
  { id: 'ob-p-5', label: 'Kalhoty / legíny', category: 'obleceni', assignedTo: ['petra'], checked: false },
  { id: 'ob-p-6', label: 'Spodní prádlo', category: 'obleceni', assignedTo: ['petra'], checked: false },
  { id: 'ob-p-7', label: 'Ponožky', category: 'obleceni', assignedTo: ['petra'], checked: false },
  { id: 'ob-p-8', label: 'Pyžamo', category: 'obleceni', assignedTo: ['petra'], checked: false },
  { id: 'ob-p-9', label: 'Tenisky', category: 'obleceni', assignedTo: ['petra'], checked: false },
  { id: 'ob-p-10', label: 'Sandály', category: 'obleceni', assignedTo: ['petra'], checked: false },
  { id: 'ob-p-11', label: 'Plážové pantofle', category: 'obleceni', assignedTo: ['petra'], checked: false },

  // Ema
  { id: 'ob-e-1', label: 'Trička', category: 'obleceni', assignedTo: ['ema'], checked: false },
  { id: 'ob-e-2', label: 'Šortky / sukně', category: 'obleceni', assignedTo: ['ema'], checked: false },
  { id: 'ob-e-3', label: 'Plavky', category: 'obleceni', assignedTo: ['ema'], checked: false },
  { id: 'ob-e-4', label: 'Spodní prádlo', category: 'obleceni', assignedTo: ['ema'], checked: false },
  { id: 'ob-e-5', label: 'Ponožky', category: 'obleceni', assignedTo: ['ema'], checked: false },
  { id: 'ob-e-6', label: 'Pyžamo', category: 'obleceni', assignedTo: ['ema'], checked: false },
  { id: 'ob-e-7', label: 'Tenisky', category: 'obleceni', assignedTo: ['ema'], checked: false },
  { id: 'ob-e-8', label: 'Sandály', category: 'obleceni', assignedTo: ['ema'], checked: false },
  { id: 'ob-e-9', label: 'Plážové pantofle', category: 'obleceni', assignedTo: ['ema'], checked: false },

  // Tomáš
  { id: 'ob-t-1', label: 'Trička', category: 'obleceni', assignedTo: ['tomas'], checked: false },
  { id: 'ob-t-2', label: 'Šortky', category: 'obleceni', assignedTo: ['tomas'], checked: false },
  { id: 'ob-t-3', label: 'Plavky', category: 'obleceni', assignedTo: ['tomas'], checked: false },
  { id: 'ob-t-4', label: 'Spodní prádlo', category: 'obleceni', assignedTo: ['tomas'], checked: false },
  { id: 'ob-t-5', label: 'Ponožky', category: 'obleceni', assignedTo: ['tomas'], checked: false },
  { id: 'ob-t-6', label: 'Pyžamo', category: 'obleceni', assignedTo: ['tomas'], checked: false },
  { id: 'ob-t-7', label: 'Tenisky', category: 'obleceni', assignedTo: ['tomas'], checked: false },
  { id: 'ob-t-8', label: 'Sandály', category: 'obleceni', assignedTo: ['tomas'], checked: false },
  { id: 'ob-t-9', label: 'Plážové pantofle', category: 'obleceni', assignedTo: ['tomas'], checked: false },

  // ── PLÁŽ & MOŘE ────────────────────────────────────────────────────────

  // Osobní
  { id: 'pl-l-1', label: 'Osuška', category: 'plaz', assignedTo: ['lukas'], checked: false },
  { id: 'pl-p-1', label: 'Osuška', category: 'plaz', assignedTo: ['petra'], checked: false },
  { id: 'pl-e-1', label: 'Osuška', category: 'plaz', assignedTo: ['ema'], checked: false },
  { id: 'pl-t-1', label: 'Osuška', category: 'plaz', assignedTo: ['tomas'], checked: false },
  { id: 'pl-l-2', label: 'Sluneční brýle', category: 'plaz', assignedTo: ['lukas'], checked: false },
  { id: 'pl-p-2', label: 'Sluneční brýle', category: 'plaz', assignedTo: ['petra'], checked: false },
  { id: 'pl-e-2', label: 'Sluneční brýle', category: 'plaz', assignedTo: ['ema'], checked: false },
  { id: 'pl-t-2', label: 'Sluneční brýle', category: 'plaz', assignedTo: ['tomas'], checked: false },
  { id: 'pl-l-3', label: 'Klobouk / kšiltovka', category: 'plaz', assignedTo: ['lukas'], checked: false },
  { id: 'pl-p-3', label: 'Klobouk / kšiltovka', category: 'plaz', assignedTo: ['petra'], checked: false },
  { id: 'pl-e-3', label: 'Klobouk / kšiltovka', category: 'plaz', assignedTo: ['ema'], checked: false },
  { id: 'pl-t-3', label: 'Klobouk / kšiltovka', category: 'plaz', assignedTo: ['tomas'], checked: false },

  // Sdílené
  { id: 'pl-s-1', label: 'Opalovací krém SPF50+', category: 'plaz', assignedTo: ['all'], checked: false },
  { id: 'pl-s-2', label: 'Opalovací krém pro děti SPF50+', category: 'plaz', assignedTo: ['ema', 'tomas'], checked: false },
  { id: 'pl-s-3', label: 'Nafukovadla / plávací pomůcky', category: 'plaz', assignedTo: ['ema', 'tomas'], checked: false },
  { id: 'pl-s-4', label: 'Potápěčské brýle', category: 'plaz', assignedTo: ['lukas', 'ema', 'tomas'], checked: false },
  { id: 'pl-s-5', label: 'Plážová taška', category: 'plaz', assignedTo: ['all'], checked: false },

  // ── ZDRAVÍ — převážně sdílené ──────────────────────────────────────────

  { id: 'zd-s-1', label: 'Ibuprofen / Paralen', category: 'zdravi', assignedTo: ['all'], checked: false },
  { id: 'zd-s-2', label: 'Dětský Paralen / Nurofen', category: 'zdravi', assignedTo: ['ema', 'tomas'], checked: false },
  { id: 'zd-s-3', label: 'Náplasti', category: 'zdravi', assignedTo: ['all'], checked: false },
  { id: 'zd-s-4', label: 'Přípravek na průjem', category: 'zdravi', assignedTo: ['all'], checked: false },
  { id: 'zd-s-5', label: 'Repelent', category: 'zdravi', assignedTo: ['all'], checked: false },
  { id: 'zd-s-6', label: 'Aloe Vera (po opalování)', category: 'zdravi', assignedTo: ['all'], checked: false },
  { id: 'zd-s-7', label: 'Dezinfekce', category: 'zdravi', assignedTo: ['all'], checked: false },
  { id: 'zd-l-1', label: 'EHIC karta', category: 'zdravi', assignedTo: ['lukas'], checked: false },
  { id: 'zd-p-1', label: 'EHIC karta', category: 'zdravi', assignedTo: ['petra'], checked: false },
  { id: 'zd-e-1', label: 'EHIC karta', category: 'zdravi', assignedTo: ['ema'], checked: false },
  { id: 'zd-t-1', label: 'EHIC karta', category: 'zdravi', assignedTo: ['tomas'], checked: false },

  // ── ELEKTRONIKA — osobní zařízení + sdílené příslušenství ──────────────

  { id: 'el-l-1', label: 'Telefon + nabíječka', category: 'elektronika', assignedTo: ['lukas'], checked: false },
  { id: 'el-p-1', label: 'Telefon + nabíječka', category: 'elektronika', assignedTo: ['petra'], checked: false },
  { id: 'el-e-1', label: 'Tablet + nabíječka', category: 'elektronika', assignedTo: ['ema'], checked: false },
  { id: 'el-t-1', label: 'Tablet + nabíječka', category: 'elektronika', assignedTo: ['tomas'], checked: false },
  { id: 'el-l-2', label: 'Sluchátka', category: 'elektronika', assignedTo: ['lukas'], checked: false },
  { id: 'el-p-2', label: 'Sluchátka', category: 'elektronika', assignedTo: ['petra'], checked: false },
  { id: 'el-s-1', label: 'Adaptér typ G (britský)', note: 'nutný!', category: 'elektronika', assignedTo: ['all'], checked: false },
  { id: 'el-s-2', label: 'Powerbank', category: 'elektronika', assignedTo: ['all'], checked: false },
  { id: 'el-s-3', label: 'Kabel USB-C', category: 'elektronika', assignedTo: ['all'], checked: false },
  { id: 'el-s-4', label: 'Kamera / GoPro', category: 'elektronika', assignedTo: ['lukas'], checked: false },

  // ── HYGIENA — osobní vs. sdílené ──────────────────────────────────────

  // Osobní (nelze sdílet)
  { id: 'hy-l-1', label: 'Zubní kartáček + pasta', category: 'hygiena', assignedTo: ['lukas'], checked: false },
  { id: 'hy-p-1', label: 'Zubní kartáček + pasta', category: 'hygiena', assignedTo: ['petra'], checked: false },
  { id: 'hy-e-1', label: 'Zubní kartáček + pasta', category: 'hygiena', assignedTo: ['ema'], checked: false },
  { id: 'hy-t-1', label: 'Zubní kartáček + pasta', category: 'hygiena', assignedTo: ['tomas'], checked: false },
  { id: 'hy-l-2', label: 'Deodorant', category: 'hygiena', assignedTo: ['lukas'], checked: false },
  { id: 'hy-p-2', label: 'Deodorant', category: 'hygiena', assignedTo: ['petra'], checked: false },
  { id: 'hy-l-3', label: 'Holicí strojek', category: 'hygiena', assignedTo: ['lukas'], checked: false },
  { id: 'hy-p-3', label: 'Kosmetická taška', category: 'hygiena', assignedTo: ['petra'], checked: false },

  // Sdílené
  { id: 'hy-s-1', label: 'Šampon + kondicionér', category: 'hygiena', assignedTo: ['all'], checked: false },
  { id: 'hy-s-2', label: 'Sprchový gel', category: 'hygiena', assignedTo: ['all'], checked: false },
  { id: 'hy-s-3', label: 'Vlhčené ubrousky', category: 'hygiena', assignedTo: ['ema', 'tomas'], checked: false },

  // ── DOKLADY — osobní ──────────────────────────────────────────────────

  { id: 'do-l-1', label: 'Cestovní pas', category: 'doklady', assignedTo: ['lukas'], checked: false },
  { id: 'do-p-1', label: 'Cestovní pas', category: 'doklady', assignedTo: ['petra'], checked: false },
  { id: 'do-e-1', label: 'Cestovní pas', category: 'doklady', assignedTo: ['ema'], checked: false },
  { id: 'do-t-1', label: 'Cestovní pas', category: 'doklady', assignedTo: ['tomas'], checked: false },
  { id: 'do-l-2', label: 'Palubní vstupenka', category: 'doklady', assignedTo: ['lukas'], checked: false },
  { id: 'do-p-2', label: 'Palubní vstupenka', category: 'doklady', assignedTo: ['petra'], checked: false },
  { id: 'do-e-2', label: 'Palubní vstupenka', category: 'doklady', assignedTo: ['ema'], checked: false },
  { id: 'do-t-2', label: 'Palubní vstupenka', category: 'doklady', assignedTo: ['tomas'], checked: false },

  // Sdílené
  { id: 'do-s-1', label: 'Hotovost EUR', category: 'doklady', assignedTo: ['lukas', 'petra'], checked: false },
  { id: 'do-s-2', label: 'Platební karta', category: 'doklady', assignedTo: ['lukas', 'petra'], checked: false },
  { id: 'do-s-3', label: 'Potvrzení Airbnb', category: 'doklady', assignedTo: ['lukas'], checked: false },
  { id: 'do-s-4', label: 'Cestovní pojištění', category: 'doklady', assignedTo: ['all'], checked: false },

  // ── PRO DĚTI ──────────────────────────────────────────────────────────

  { id: 'de-e-1', label: 'Knížky / komiksy', category: 'deti', assignedTo: ['ema'], checked: false },
  { id: 'de-e-2', label: 'Vybarvovánky / blok + tužky', category: 'deti', assignedTo: ['ema'], checked: false },
  { id: 'de-e-3', label: 'Oblíbená hračka / plyšák', category: 'deti', assignedTo: ['ema'], checked: false },
  { id: 'de-t-1', label: 'Knížky / komiksy', category: 'deti', assignedTo: ['tomas'], checked: false },
  { id: 'de-t-2', label: 'Oblíbená hračka / auto', category: 'deti', assignedTo: ['tomas'], checked: false },
  { id: 'de-s-1', label: 'Kartičkové hry', category: 'deti', assignedTo: ['ema', 'tomas'], checked: false },
  { id: 'de-s-2', label: 'Bedminton / míček na pláž', category: 'deti', assignedTo: ['ema', 'tomas'], checked: false },
  { id: 'de-s-3', label: 'Krabice na škeble / přírodniny', category: 'deti', assignedTo: ['ema', 'tomas'], checked: false },

  // ── DO APARTMÁNU — vše sdílené ────────────────────────────────────────

  { id: 'ap-s-1', label: 'Multiprodlužovák', note: 'britská zástrčka nebo s adaptérem', category: 'apartman', assignedTo: ['all'], checked: false },
  { id: 'ap-s-2', label: 'Sáčky na odpadky', category: 'apartman', assignedTo: ['all'], checked: false },
  { id: 'ap-s-3', label: 'Ziplock sáčky (pláž / mokré věci)', category: 'apartman', assignedTo: ['all'], checked: false },
  { id: 'ap-s-4', label: 'Skládací nákupní taška', category: 'apartman', assignedTo: ['all'], checked: false },
  { id: 'ap-s-5', label: 'Cestovní lékárnička', category: 'apartman', assignedTo: ['all'], checked: false },
  { id: 'ap-s-6', label: 'Nůžky / párátka', category: 'apartman', assignedTo: ['all'], checked: false },

  // ── JÍDLO & PITÍ ────────────────────────────────────────────────────────
  { id: 'ji-s-1', label: 'Čaj', category: 'jidlo', assignedTo: ['all'], checked: false },
  { id: 'ji-s-2', label: 'Káva', category: 'jidlo', assignedTo: ['all'], checked: false },
  { id: 'ji-s-3', label: 'Koření', category: 'jidlo', assignedTo: ['all'], checked: false },
]
