function convert() {
    const csv = document.getElementById("csv").value;

    const lines = csv
        .replace(/\r/g, "")
        .trim()
        .split("\n");

    const tracks = [];

    for (let i = 1; i < lines.length; i++) {
        const parts = lines[i].split(",");

        if (parts.length < 5) continue;

        tracks.push({
            title: parts[1].trim(),
            duration: parts[4].trim()
        });
    }

    document.getElementById("result").value =
        JSON.stringify(tracks, null, 2);
}
