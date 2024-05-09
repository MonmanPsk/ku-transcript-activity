export type StatusProps = {
  pass: boolean;
};

export default function Status({ pass }: StatusProps) {
  return (
    <div className={pass ? 'page1-pass-status' : 'page1-not-pass-status'}>
      <span className={pass ? 'page1-pass-text006' : 'page1-not-pass-text006'}>
        {pass ? 'สถานะ : pass' : 'สถานะ : not pass'}
      </span>
    </div>
  );
}