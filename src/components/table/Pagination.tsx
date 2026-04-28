export function Pagination({ total = 128 }: { total?: number }) {
  return <div className="pagination"><span>{`הצגה 1-5 מתוך ${total}`}</span><div className="pages"><button>הבא ←</button><button>5</button><button>4</button><button>3</button><button>2</button><button className="current">1</button><button>→ קודם</button></div></div>
}
