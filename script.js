// ฐานข้อมูลเกณฑ์ผู้ตรวจฎีกาตามเอกสารในรูปภาพ
const inspectorRules = [
  // --- สำนักศึกษา ---
  { dept: 'สำนักศึกษา', work: 'ฝ่ายบริหารงานทั่วไป, ฝ่ายส่งเสริมการศึกษา, ฝ่ายส่งเสริมศาสนา ศิลปะและวัฒนธรรม', inspector: 'เสงี่ยมจิต (พี่นายน)' },
  { dept: 'สำนักศึกษา', work: 'กลุ่มงานนิเทศติดตามและประเมินผลการจัดการศึกษา', inspector: 'เทวฤทธิ์ (พี่เอ๋)' },

  // --- ยุทธศาสตร์ ---
  { dept: 'ยุทธศาสตร์', work: 'กองยุทธศาสตร์และงบประมาณ', inspector: 'กาญจนา (พี่อ้อย)' },

  // --- กองป้องกัน ---
  { dept: 'กองป้องกัน', work: 'กองป้องกันและบรรเทาสาธารณภัย', inspector: 'ศิริโศภิษฐ์ (พี่ตั๊ก)' },
  { dept: 'กองป้องกัน', work: 'ฝ่ายส่งเสริมการท่องเที่ยว', inspector: 'เสงี่ยมจิต (พี่นายน)' },

  // --- สำนักปลัด ---
  { dept: 'สำนักปลัด', work: 'ฝ่ายนิติการ (ค่าธรรมเนียม)', inspector: 'เทวฤทธิ์ (พี่เอ๋)' },
  { dept: 'สำนักปลัด', work: 'ฝ่ายนิติการ (ทั่วไป)', inspector: 'กาญจนา (พี่อ้อย)' },
  { dept: 'สำนักปลัด', work: 'ฝ่ายสวัสดิการสังคม / ฝ่ายสถานสงเคราะห์', inspector: 'เกศินี (พี่เกด)' },
  { dept: 'สำนักปลัด', work: 'ฝ่ายอำนวยการ งานบริหารทั่วไป (ค่ารับรอง ค่าใช้จ่ายในการประชุม)', inspector: 'รัฐทร (พี่กิ๊ก)' },

  // --- สาธารณสุข ---
  { dept: 'สาธารณสุข', work: 'ฝ่ายบริหารงานสาธารณสุข / ฝ่ายบริการสาธารณสุข / จ้างเหมา (พัชรญ์, สุรารัตน์, ณัฐพร, กฤตษ์ภูมิ, ธีรภัทร, กฤษณา, นภัสวรรณ)', inspector: 'เสงี่ยมจิต (พี่นายน)' },
  { dept: 'สาธารณสุข', work: 'ฝ่ายบริหารงานทั่วไป / จ้างเหมา ศุภกานต์', inspector: 'กุลนารี (พี่นก)' },

  // --- เลขานุการ ---
  { dept: 'เลขานุการ', work: 'สำนักเลขานุการ / ค่าตอบแทนคณะกรรมการสำนักงานเลขานุการ', inspector: 'กาญจนา (พี่อ้อย)' },

  // --- กองการเจ้าหน้าที่ ---
  { dept: 'กจ.', work: 'กองการเจ้าหน้าที่', inspector: 'รัฐทร (พี่กิ๊ก)' },

  // --- สำนักคลัง ---
  { dept: 'สำนักคลัง', work: 'ส่วนบริหารงานพัสดุและทรัพย์สิน (ยกเว้น ถอนเงินรับฝากประกันสัญญา / งบบุคลากร)', inspector: 'ชนินทร์ดา (พี่กุ้ง)' },
  { dept: 'สำนักคลัง', work: 'ส่วนบริหารงานคลัง / หน่วยตรวจสอบภายใน / ค่าตอบแทนคณะกรรมการกองคลัง (บ.ทั่วไป)', inspector: 'ศิริพร (พี่แบรน)' },
  { dept: 'สำนักคลัง', work: 'ส่วนสิ่งแวดล้อมและทรัพยากรธรรมชาติ / งานก่อสร้าง / จ้างหาเงินสะสม / งบกลาง (เงินสำรองจ่าย, โชติเดช, อ.ทางหลวง, สันป่าตอง, แม่วาง, ดอยหล่อ, จอมทอง, ดอยเต่า, อมก๋อย, แม่แจ่ม, แม่แจ่ม, กัลยาณิวัฒนา)', inspector: 'ชนินทร์ดา (พี่กุ้ง)' },
  { dept: 'สำนักคลัง', work: 'ค่าวัสดุก่อสร้าง, ค่าวัสดุเชื่อมโลหะและหล่อลื่น', inspector: 'กาญจนา (พี่อ้อย)' },

  // --- สำนักช่าง ---
  { dept: 'สำนักช่าง', work: 'งานก่อสร้าง จ่ายขาดเงินสะสม, งบกลาง เงินสำรองจ่าย (อ.เมือง, อ.แม่ออน, อ.สันกำแพง, อ.สันทราย, อ.สารภี, หางดง)', inspector: 'สุรารัตน์ (พี่อ้อย)' },
  { dept: 'สำนักช่าง', work: 'ฝ่ายบริหารงานทั่วไปเกี่ยวกับอุตสาหกรรมและโยธา / ค่าบำรุงรักษาและซ่อมแซม / ค่าตอบแทนและค่าสาธารณูปโภค / ค่าลงทะเบียนฝึกอบรม (ยกเว้น ค่าซ่อมแซมเครื่องจักรกล)', inspector: 'สุรารัตน์ (พี่อ้อย)' },
  { dept: 'สำนักช่าง', work: 'ค่าซ่อมแซมเครื่องจักรกล / งานกำจัดขยะมูลฝอยและสิ่งปฏิกูล / งานก่อสร้าง รายจ่ายเพื่อให้ได้มาซึ่งบริการ / ค่าวัสดุ (ยกเว้นค่าวัสดุก่อสร้างและค่าวัสดุน้ำมันเชื้อเพลิงและหล่อลื่น)', inspector: 'กุลนารี (พี่นก)' },
  { dept: 'สำนักช่าง', work: 'งานก่อสร้าง จ่ายขาดเงินสะสม, งบกลาง เงินสำรองจ่าย (อ.ไชยปราการ, ดอยสะเก็ด, ฝาง, พร้าว, แม่แตง, แม่ริม, เชียงดาว, แม่ไอ่, เวียงแหง, สะเมิง) / วัสดุไฟฟ้าและวิทยุ / วัสดุยานพาหนะและขนส่ง / วัสดุวิทยาศาสตร์ / วัสดุการเกษตร / วัสดุเครื่องแต่งกาย / วัสดุจราจร / ค่าครุภัณฑ์', inspector: 'ศิริวรรณ (พี่ศรี)' },
  { dept: 'สำนักช่าง', work: 'ค่าตอบแทนคณะกรรมการสำนักช่างตามอำนาจหน้าที่รับผิดชอบ', inspector: 'ศิริวรรณ (พี่ศรี)' },
  { dept: 'สำนักช่าง', work: 'จ้างเหมาบุคคลภายนอกช่วยปฏิบัติงานของสำนักช่าง', inspector: 'รัฐทร (พี่กิ๊ก)' },
  { dept: 'สำนักช่าง', work: 'ภาษี ณ ที่จ่าย', inspector: 'วิวัฒน์ (พี่แบรน)' },
  { dept: 'สำนักช่าง', work: 'ค่าเบี้ยเลี้ยง', inspector: 'ธนวรรณ (พี่หนอย)' },

  // --- สวัสดิการ / บุคลากร / อื่นๆ ---
  { dept: 'สวัสดิการ/อื่นๆ', work: 'ค่าเดินทางไปราชการและค่าเบี้ยเลี้ยง ทุกหน่วยงาน / ถอนเงินรับฝากประกันสัญญา / หลักประกันซอง เงินประกันผลงาน', inspector: 'เกศินี (พี่เกด)' },
  { dept: 'สวัสดิการ/อื่นๆ', work: 'ค่าเช่าบ้าน / ค่ารักษาพยาบาล / ค่าการศึกษาบุตร / กบข. กสจ.', inspector: 'กุลกาญจน์ (พี่เอ๋)' },
  { dept: 'สวัสดิการ/อื่นๆ', work: 'เงินเดือนปกติ ค่าตอบแทนแพทย์และเภสัชกรโรงพยาบาล ร.11 (ค่าตอบแทนผู้ปฏิบัติรายการประกันสังคม)', inspector: 'นันทนันท์ (พี่จุ๋ม)' },
  { dept: 'สวัสดิการ/อื่นๆ', work: 'ตรวจฎีกา ของกองทุนประกันสุขภาพระดับ จ.เชียงใหม่', inspector: 'กุลนารี (พี่นก)' }
];

// ดึงข้อมูลรายการฎีกาที่ถูกบันทึกไว้ใน LocalStorage
let dikkaData = JSON.parse(localStorage.getItem('dikkaData')) || [
  { id: '05624', date: '2026-08-19', dept: 'สำนักช่าง', item: 'ค่าวัสดุก่อสร้าง', payee: 'บริษัท A', amount: 15000, inspector: 'สุรารัตน์ (พี่อ้อย)', status: 'รอส่ง', sentTime: '-' }
];

// เรียกทำงานตามหน้าที่เปิดอยู่
window.onload = function() {
  if (document.getElementById('dikkaDate')) {
    document.getElementById('dikkaDate').valueAsDate = new Date();
    initDeptDropdown();
  }
  if (document.getElementById('dikkaBody')) {
    renderDikkaTable();
  }
  if (document.getElementById('inspectorBody')) {
    renderInspectorTable();
  }
};

// โหลดรายการลง Dropdown
function initDeptDropdown() {
  const select = document.getElementById('deptSelect');
  if (!select) return;

  select.innerHTML = '<option value="">-- เลือกแผนงาน / งาน / รายการ --</option>';
  inspectorRules.forEach((rule, index) => {
    select.innerHTML += `<option value="${index}">[${rule.dept}] ${rule.work}</option>`;
  });
}

// ระบบจับคู่ผู้ตรวจอัตโนมัติ
function autoMatchInspector() {
  const selectIndex = document.getElementById('deptSelect').value;
  const inspectorInput = document.getElementById('inspectorInput');
  
  if (selectIndex !== "") {
    inspectorInput.value = inspectorRules[selectIndex].inspector;
  } else {
    inspectorInput.value = '';
  }
}

// บันทึกข้อมูลฎีกา
function saveDikka(e) {
  e.preventDefault();
  const selectIndex = document.getElementById('deptSelect').value;
  const selectedRule = inspectorRules[selectIndex];

  const newEntry = {
    id: document.getElementById('dikkaNo').value,
    date: document.getElementById('dikkaDate').value,
    dept: selectedRule ? selectedRule.dept : '-',
    item: document.getElementById('itemDetail').value,
    payee: document.getElementById('payee').value,
    amount: parseFloat(document.getElementById('amount').value),
    inspector: document.getElementById('inspectorInput').value,
    status: 'รอส่ง',
    sentTime: '-'
  };

  dikkaData.push(newEntry);
  localStorage.setItem('dikkaData', JSON.stringify(dikkaData));
  alert('บันทึกข้อมูลเรียบร้อยแล้ว!');
  window.location.href = 'page2.html';
}

// แสดงตารางคุมฎีกา หน้า 2
function renderDikkaTable() {
  const tbody = document.getElementById('dikkaBody');
  if (!tbody) return;
  tbody.innerHTML = '';
  
  dikkaData.forEach((item, index) => {
    const isSent = item.status === 'ส่งแล้ว';
    tbody.innerHTML += `
      <tr>
        <td><b>${item.id}</b></td>
        <td>${item.date}</td>
        <td>${item.dept}</td>
        <td>${item.payee}</td>
        <td><b style="color: #2563eb;">${item.inspector}</b></td>
        <td>
          <button class="btn ${isSent ? 'btn-status sent' : 'btn-status'}" onclick="changeStatus(${index})" ${isSent ? 'disabled' : ''}>
            ${isSent ? 'ส่งแล้ว' : 'ส่งผู้ตรวจ'}
          </button>
        </td>
        <td><small>${item.sentTime}</small></td>
      </tr>
    `;
  });
}

// อัปเดตสถานะการส่งฎีกา
function changeStatus(index) {
  const now = new Date();
  dikkaData[index].status = 'ส่งแล้ว';
  dikkaData[index].sentTime = now.toLocaleDateString('th-TH') + ' ' + now.toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' });
  localStorage.setItem('dikkaData', JSON.stringify(dikkaData));
  renderDikkaTable();
}

// ระบบค้นหาข้อมูลในตาราง
function filterTable() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  document.querySelectorAll('#dikkaBody tr').forEach(row => {
    row.style.display = row.innerText.toLowerCase().includes(query) ? '' : 'none';
  });
}

// แสดงตารางผู้ตรวจ หน้า 3
function renderInspectorTable() {
  const tbody = document.getElementById('inspectorBody');
  if (!tbody) return;
  tbody.innerHTML = '';

  inspectorRules.forEach(rule => {
    tbody.innerHTML += `
      <tr>
        <td><b>${rule.dept}</b></td>
        <td>${rule.work}</td>
        <td><b style="color: #2563eb;">${rule.inspector}</b></td>
      </tr>
    `;
  });
}
