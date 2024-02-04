// Case 2: ️ The Time Wizard's Gambit

/**
 * ================================================= SUDO CODE =================================================
 * Func findCommonTimeSlot(timeSlots):
 *     1. Inisialisasi variabel timePoints dati array dari timeSlots (param) lalu gabungkan menjadi satu array.
 *     2. Urutkan timePoints secara ascending berdasarkan start time.
 *     3. Inisialisasi variabel commonSlot menjadi null/Tidak ada slot.
 *     4. Iterasi dari i=0 hingga i < panjang(timePoints) - 1:
 *         a. Dapatkan waktu mulai (start) dan waktu selesai (end) dari timePoints[i].
 *         b. Dapatkan waktu mulai berikutnya (nextStart) dan waktu selesai berikutnya (nextEnd) dari timePoints[i + 1].
 *         c. Periksa apakah ada tumpang tindih di antara semua diplomat untuk waktu berikutnya:
 *             i. Jika setiap diplomat memiliki setidaknya satu slot yang tumpang tindih, set commonSlot menjadi [nextStart, minimum dari end dan nextEnd].
 *            ii. Hentikan iterasi.
 *     5. Kembalikan commonSlot.
 **/

/**
 * Check schedule using overlapping time slots among all diplomats
 * takes a list of meeting time ranges and determines the shortest common time slot where everyone can meet.
 *
 * @param {list of array} timeSlots - For example [[9, 12],[14, 16],[8, 10]],[[10, 12],[15, 17]]
 * @returns {list of array or string} - Returns string if no scheduled, otherwise list of schedule.
 */

function findCommonTimeSlot(timeSlots) {
  // Flatten the time slots into a single array of time points
  const timePoints = timeSlots.flat();

  // Sort the start time points ASC
  timePoints.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  let commonSlot = "No common slot available";

  // Iterate through the sorted time points
  for (let i = 0; i < timePoints.length - 1; i++) {
    const [start, end] = timePoints[i];
    const [nextStart, nextEnd] = timePoints[i + 1];

    // Check for overlapping time slots among all diplomats
    if (
      timeSlots.every((diplomat) =>
        diplomat.some((slot) => slot[0] <= nextStart && slot[1] >= end)
      )
    ) {
      commonSlot = [nextStart, Math.min(end, nextEnd)];
      break;
    }
  }

  return commonSlot;
}

// Example usage with the provided time slots
const timeSlots = [
  [
    [9, 12],
    [14, 16],
    [8, 10],
  ],
  [
    [10, 12],
    [15, 17],
  ],
  [
    [11, 13],
    [16, 18],
  ],
  [
    [9, 13],
    [16, 18],
  ],
];

console.log(findCommonTimeSlot(timeSlots));
